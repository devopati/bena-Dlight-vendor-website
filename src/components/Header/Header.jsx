import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "../../Data/navItems";
import "./header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuClicked, setMenuClicked] = useState("navbar menu-clicked");
  const [activeMenu, setActiveMenu] = useState("home");

  const toogleMenuBar = () => {
    menuClicked === "navbar"
      ? setMenuClicked("navbar menu-clicked")
      : setMenuClicked("navbar");
  };

  useEffect(() => {
    setMenuItems(NavItems);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, [menuClicked]);

  return (
    <div className="header-container">
      <div className="header-items">
        <div className="header-logo">
          <Link to="/">
            <img
              src="https://www.dlight.com/wp-content/themes/dlight-baunfire/img/logonew-footer.png"
              alt="LOGO"
            />
          </Link>
        </div>
        <nav className="">
          <ul className={menuClicked}>
            {NavItems.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="nav-link"
                  onClick={() => setActiveMenu(item.id)}
                >
                  <li
                    className={`nav-item ${
                      activeMenu === item.id ? "active-menu" : ""
                    }`}
                    onClick={toogleMenuBar}
                  >
                    {item.label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
        <div
          data-aos="fade-left"
          className="small-menu"
          onClick={toogleMenuBar}
        >
          {menuClicked === "navbar" ? (
            <RxCross2 id="header-icon" />
          ) : (
            <AiOutlineMenu id="header-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
