import React from "react";
import filterStyle from "./filter.module.css";

export const Filter = ({ sortBy, setsortBy, size, setSize }) => {
  return (
    <div style={{ padding: "0.5rem" }} className={filterStyle.card}>
      <p style={{ fontWeight: "bold" }}>Sort By Price : </p>
      <input
        type="radio"
        onChange={() => setsortBy("LOW_TO_HIGH")}
        checked={sortBy === "LOW_TO_HIGH"}
      />{" "}
      Low-to-High &nbsp; <br />
      <input
        type="radio"
        onChange={() => setsortBy("HIGH_TO_LOW")}
        checked={sortBy === "HIGH_TO_LOW"}
      />{" "}
      High-to-Low &nbsp;
      <p style={{ fontWeight: "bold" }}>Sort By Size : </p>
      <button
        onClick={() => setSize("S")}
        className={`${filterStyle.btn} && ${
          size === "S" && `${filterStyle.dark}`
        }`}
      >
        S
      </button>
      <button
        onClick={() => setSize("M")}
        className={`${filterStyle.btn} && ${
          size === "M" && `${filterStyle.dark}`
        }`}
      >
        M
      </button>
      <button
        onClick={() => setSize("L")}
        className={`${filterStyle.btn} && ${
          size === "L" && `${filterStyle.dark}`
        }`}
      >
        L
      </button>
      <button
        onClick={() => setSize("XL")}
        className={`${filterStyle.btn} && ${
          size === "XL" && `${filterStyle.dark}`
        }`}
      >
        XL
      </button>
      <br />
      <button
        className={filterStyle.btn}
        onClick={() => {
          setSize("S");
          setsortBy("LOW_TO_HIGH");
        }}
      >
        clear all
      </button>
    </div>
  );
};
