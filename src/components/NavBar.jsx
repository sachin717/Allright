import React from "react";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// import styled from "styled-components";

const NavBar = () => {
  return (
    <>
      <div className="navBarContainer">
        <div className="navHeader">
          <p>Get FREE SHIPPING on orders above Rs 499</p>
        </div>
        <div className="navBarWrapper">
          <div className="navBarIcon">
            <a href="#" className="menuBar">
              <GiHamburgerMenu />
            </a>
          </div>
          <div>
            <Link to="/">
              <img src="\HeaderLogo.webp" alt="HeaderLogo" />
            </Link>
          </div>
          <div className="navBarIcon">
            <div className="navBarIconRight">
              <a href="#">
                <FaSearch />
              </a>
              <Link to="/cart">
                <BiSolidShoppingBagAlt />
              </Link>
            </div>
          </div>
        </div>
        <div className="highlightText">
          <marquee
            width="100%"
            direction="left"
            height="30px"
            className="rotationText"
          >
            <span>High Protein Meal 🫧</span>
            <span>Rich in fiber 🫧</span>
            <span>Clean ingredients 🫧</span>
            <span>Rich in taste 🫧</span>
            <span>No Nonscences ingredients 🫧</span>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default NavBar;
