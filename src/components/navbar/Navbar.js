import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
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
      >
        Women
      </NavLink>{" "}
      ||
    </nav>
  );
};
