import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type NestedDropdownProps = {
  menus: Array<{ title: string; submenus: string[] }>;
};

const NestedDropdown: React.FC<NestedDropdownProps> = ({ menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedSubmenu, setSelectedSubmenu] = useState("");
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  const handleSubmenuClick = (submenu: string) => {
    switch (submenu) {
      //crop liberary
      case "Crop Calender":
        navigate(`/crop_calendar`);
        break;
      case "Crop Health":
        navigate(`/crop_health`);
        break;
      case "Crop Library":
        navigate(`/crop_library`);
        break;
      case "FertiCal":
        navigate(`/fertical`);
        break;
      case "Mandi Prices":
        navigate(`/mandi_prices`);
        break;

      //pos

      case "Sale":
        navigate(``);
        break;
      case "Inventory":
        navigate(`/inventory`);
        break;
      case "Reports":
        navigate(`/report`);
        break;
      case "Product":
        navigate(`/purchase`);
        break;
      case "Sales Statement":
        navigate(`/accounting`);
        break;

      // FRM

      case "Dashboard":
        navigate(`/dashboard`);
        break;
      case "Purchase":
        navigate(`/farm_purchase`);
        break;
      case "Cultivation":
        navigate(`/cultivation`);
        break;
      case "Credit":
        navigate(`/credit`);
        break;
      case "support":
        navigate(`/support`);
        break;
      case "New Registration":
        navigate(`/new_registration`);
        break;

      //Management

      case "Management":
        navigate(`/problem`);
        break;

      //Help

      case "Problem":
        navigate(`/problem`);
        break;
      case "Expert":
        navigate(`/expert`);
        break;
      case "Guide":
        navigate(`/mandi_prices`);
        break;

      default:
        navigate(`/guide`);
        break;
    }
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e: any) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-row justify-between z-20">
      <img
        className="w-8 h-8 mt-1 mb-1 ml-1"
        src="Images/logo.png"
        alt="Logo"
      />
      <button
        onClick={handleButtonClick}
        className="btn relative focus:outline-none flex items-center"
      >
        <span className="icon absolute h-10 w-16 flex justify-center items-center transition-all duration-500">
          <svg
            viewBox="0 0 175 80"
            width="40"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all duration-500 ${
              isOpen
                ? "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
          </svg>
        </span>
        <span
          className={`text transition-all duration-500 ${
            isOpen ? "opacity-0" : "opacity-0"
          }`}
        >
          MENU
        </span>
      </button>
      {isOpen && (
        <div
          ref={(node) => (dropdownRef.current = node)}
          className={`absolute mt-10 left-0 bg-white border border-gray-300 rounded-lg shadow-md z-10 w-[100vw] transition-transform duration-5000 ease-in-out ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="p-4">
            <ul className="text-center text-sm">
              {menus.map((menu, index) => (
                <li
                  key={index}
                  onClick={() => handleMenuClick(menu.title)}
                  className={`cursor-pointer ${
                    selectedMenu === menu.title
                      ? "text-[#526D4E] mix-blend-hard-light"
                      : "text-[#13490A]"
                  }`}
                >
                  {menu.title}
                </li>
              ))}
            </ul>
            <hr className="my-2" />
            {selectedMenu && (
              <ul className="mt-2">
                {menus
                  .find((menu) => menu.title === selectedMenu)
                  ?.submenus.map((submenu, index) => (
                    <li
                      key={index}
                      onClick={() => handleSubmenuClick(submenu)}
                      className={`cursor-pointer ${
                        selectedSubmenu === submenu
                          ? "text-[#526D4E] mix-blend-hard-light"
                          : "text-[#13490A]"
                      }`}
                    >
                      {submenu}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NestedDropdown;
