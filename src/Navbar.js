import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="nav-logo">
          <h2>Recipe App</h2>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a
              href="https://github.com/rithmschool/udemy_course_exercises/blob/master/react/recipe-props-starter/public/index.html"
              title="New Recipe"
              className="nav-link"
            >
              New Recipe
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/rithmschool/udemy_course_exercises/blob/master/react/recipe-props-starter/public/index.html"
              title="New Recipe"
              className="nav-link"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/rithmschool/udemy_course_exercises/blob/master/react/recipe-props-starter/public/index.html"
              title="New Recipe"
              className="nav-link"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/rithmschool/udemy_course_exercises/blob/master/react/recipe-props-starter/public/index.html"
              title="New Recipe"
              className="nav-link"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
