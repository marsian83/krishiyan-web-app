import React from "react";
import Weather from "../../pages/farmer/Weather";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Header = (props: any) => {
  const navigate = useNavigate();
  let DealerName = localStorage.getItem("dealerName");
  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    window.location.reload();
  };
  return (
    <header
      className="bg-[#F3FFF1] w-full h-[12vh] xl:h-[14vh] flex flex-row items-center rounded-2xl ml-1 shadow-[0_8px_16px_rgba(0,0,0,0.1)] 
        pr-[1vw]"
    >
      <div className="text-[#13490A] text-center font-roboto font-black text-lg leading-7 mt-4 flex-[6] lg:text-sm xl:text-base">
        <h1>{props?.title}</h1>
        <h1>{props?.subtitle}</h1>
      </div>
      <div className="text-[#13490A] text-center font-roboto mt-5">
        <Weather />
      </div>
      <div className="flex items-center justify-center font-roboto flex-[2] lg:space-x-2">
        <div className="flex items-center rounded-lg gap-3">
          <p className="text-[#000000] font-normal text-xs lg:text-xs xl:text-sm">
            {DealerName}
          </p>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <Button variant="contained" onClick={logout} sx={{backgroundColor:'#05AB2A'}}>
            <Icon
              icon="material-symbols:logout"
              height={30}
              width={30}
              // color="red"
            />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
