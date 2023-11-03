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
    setSelectedSubmenu(submenu);
    navigate(`/your-route-path/${selectedMenu}/${submenu}`);
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
    <div className="relative">
      <button
        onClick={handleButtonClick}
        className="p-2 text-gray-600 bg-black"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          ref={(node) => (dropdownRef.current = node)}
          className="absolute mt-2 left-0 bg-white border border-gray-300 rounded-lg shadow-md z-10 w-[100vw]"
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
