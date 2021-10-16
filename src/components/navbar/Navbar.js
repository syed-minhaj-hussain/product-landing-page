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
        style={{
          textDecoration: "none",
          color: "#000",
          backgroundColor: "#fff",
          padding: "0.2rem 0.5rem",
          marginRight: "0.25rem",
        }}
        end
      >
        Home
      </NavLink>{" "}
      <NavLink
        to="/brand/Nike"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        style={{
          textDecoration: "none",
          color: "#000",
          backgroundColor: "#fff",
          padding: "0.2rem 0.5rem",
          marginRight: "0.25rem",
        }}
      >
        Brands
      </NavLink>{" "}
      <NavLink
        to="/men"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        style={{
          textDecoration: "none",
          color: "#000",
          backgroundColor: "#fff",
          padding: "0.2rem 0.5rem",
          marginRight: "0.25rem",
        }}
      >
        Men
      </NavLink>{" "}
      <NavLink
        to="/women"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        style={{
          textDecoration: "none",
          color: "#000",
          backgroundColor: "#fff",
          padding: "0.2rem 0.5rem",
          marginRight: "0.25rem",
        }}
      >
        Women
      </NavLink>{" "}
    </nav>
  );
};
