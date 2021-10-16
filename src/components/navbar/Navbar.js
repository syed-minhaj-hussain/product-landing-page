import React from "react";
import { NavLink } from "react-router-dom";
import navStyle from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={navStyle.navbar}>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        style={{ textDecoration: "none" }}
        end
      >
        Home
      </NavLink>{" "}
      ||
      <NavLink
        to="/brands"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        style={{ textDecoration: "none" }}
      >
        Brands
      </NavLink>{" "}
      ||
      <NavLink
        to="/men"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        style={{ textDecoration: "none" }}
      >
        Men
      </NavLink>{" "}
      ||
      <NavLink
        to="/women"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        style={{ textDecoration: "none" }}
      >
        Women
      </NavLink>{" "}
      ||
    </nav>
  );
};
