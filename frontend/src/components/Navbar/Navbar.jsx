import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import navbarIcon from "../../assets/navbar-icon.png";
function Navbar(props) {
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  function handleClick() {
    setIsNavExpanded(!isNavExpanded);
  }

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("#navbar");

    window.scrollY > 0
      ? navbar.classList.add("fixed")
      : navbar.classList.remove("fixed");
  });

  return (
    <>
      <nav className="landing-navbar" id="navbar">
        <div className="navbar-logo">
          <img src={navbarIcon} onClick={() => navigate("/")} />
          <h1>Blinder</h1>
        </div>
        <div className={isNavExpanded ? "navbar-menu expanded" : "navbar-menu"}>
          <ul>
            <li>
              <Link to="/community" id="community">
                Community
              </Link>
            </li>
            <li>
              <Link to="/blog" id="blog">
                Blog
              </Link>
            </li>
            {props.logged != "true" && (
              <li>
                <button onClick={() => navigate("/login")}>Login</button>
              </li>
            )}

            {props.logged === "true" && <></>}
          </ul>
        </div>
        <button className="hamburger" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
