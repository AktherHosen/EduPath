import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="container">
      <h1 className="logo">Logo</h1>

      <ul>
        <li>
          <a href="#">
            Courses
            <MdOutlineKeyboardArrowDown className="dropdownIcon" />
          </a>
        </li>
        <li>
          <a href="#">
            Instructor
            <MdOutlineKeyboardArrowDown className="dropdownIcon" />
          </a>
        </li>
        <li>
          <a href="#">
            Blogs
            <MdOutlineKeyboardArrowDown className="dropdownIcon" />
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="left-container">
        <span className="shopping">
          <HiOutlineShoppingBag className="icon" />
        </span>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
