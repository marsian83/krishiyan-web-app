import React, { useState, useEffect } from "react";
import Weather from "../../pages/farmer/Weather";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Popup from "../../Components/layouts/PopUp";
import { extractCodeFromDriveLink } from "../../handleImageCode";
import axios from "axios";

const Header = (props: any) => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [popupData, setPopupData] = useState<any>(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const navigate = useNavigate();
  let DealerName = localStorage.getItem("dealerName");
  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/home");
    window.location.reload();
  };

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  const handleLanguageChange = (language: string) => {
    console.log(language);
    localStorage.setItem("selectedLanguage", language);
    console.log(
      "heacder laocl thing",
      localStorage.getItem("selectedLanguage")
    );

    // Handle language change logic here
    setSelectedLanguage(language);
  };

  useEffect(() => {
    console.log("effect being called");
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/popups`)
      .then((response) => {
        if (response.data.success) {
          setPopupData(response.data.popups[0]);
        } else {
          console.log("Error while loading popup data");
        }
      });
  }, []);

  useEffect(() => {
    // Check if the Google Translate script has already been loaded
    if (!document.getElementById("google-translate-script")) {
      // Load the Google Translate script dynamically
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.id = "google-translate-script"; // Set a unique ID for the script
      document.head.appendChild(script);

      // Cleanup script on component unmount
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  // Function to initialize Google Translate element
  function googleTranslateElementInit() {
    // Explicitly define the 'google' property on the window object
    interface WindowWithGoogle extends Window {
      google: any; // Adjust the type as needed
    }

    const windowWithGoogle = window as unknown as WindowWithGoogle;

    new windowWithGoogle.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages:
          "en,as,ar,bn,bho,	zh-CN,zh-TW,doi,fr,de,gu,hi,ja,kn,ml,mr,ne,or,pa,ru,sa,sd,si,es,ta,te,ur",
      },
      "google_translate_element"
    );
  }

  return (
    <header className="bg-[#F3FFF1] invisible md:visible w-full xl:h-[14vh] flex flex-col justify-between xl:flex-row items-center rounded-2xl shadow-md mobile:w-[65vw] mobile:absolute mobile:right-0 ">
      <div className="text-[#13490A] ml-[20vw] text-center font-roboto font-black text-lg xl:text-base leading-7 mt-4 p-2">
        <h1>{props?.title}</h1>
        <h1>{props?.subtitle}</h1>
      </div>
      <div className="text-[#13490A] text-center font-roboto mt-4 p-2">
        <Weather />
      </div>
      <div id="google_translate_element"></div>
      <div className="flex items-center justify-center xl:justify-end font-roboto p-2">
        <div className="flex items-center gap-3  mobile:flex-col">
          <Avatar
            alt="Remy Sharp"
            src="Images\farmer.jpeg"
            sx={{ width: 56, height: 56 }}
          />
          <div className="text-[#000000] font-normal text-xs xl:text-sm">
            {DealerName}
          </div>
          <Button
            variant="contained"
            onClick={logout}
            sx={{ backgroundColor: "#05AB2A" }}
          >
            <Icon
              icon="material-symbols:logout"
              height={30}
              width={30}
              // color="red"
            />
          </Button>
          <button
            className="mt-4 px-4 py-2  border-4 border-blue-600  hover:border-blue-400 bg-blue-600  rounded hover:bg-blue-200 animate-bounce"
            onClick={openPopup}
          >
            <div className="flex flex-row">
              <img
                src={
                  popupData?.image
                    ? `https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(
                        popupData.image
                      )}`
                    : "Images/Chat.png"
                }
                alt="WhatsApp"
                className="w-8 h-8 "
              />
              <p className="text-white text-2xl text-bold"> Today's Deal</p>
            </div>
          </button>
        </div>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </header>
  );
};

export default Header;
