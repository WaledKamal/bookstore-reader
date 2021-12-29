import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
          <img className="logo-img" src={require("../assets/logo.png")}></img>
        <input
          type={"checkbox"}
          style={{ display: "none" }}
          className="bar-checkbox"
          id="bar-menu"
        ></input>
        <label className="bar_icon" for="bar-menu">
          <i class="fas fa-bars"></i>
        </label>
        <ul className="nav-links">
        <div className="search-bar">
          <input
            placeholder={"Search a book here ! ... "}
            type={"search"}
            className="search-input"
          ></input>
          <button style={{ border: "none" }}>
            <i class="fas fa-search"></i>
          </button>
        </div>
          <li>
            <a href="#">
              <i class="fas fa-book"></i>
              Books
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-headphones-alt"></i>
              Sounds
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-youtube"></i>
              Videos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
