import React, { useState } from "react";

export const Filter = ({ sortBy, setsortBy }) => {
  return (
    <div style={{ padding: "0.5rem" }}>
      <input
        type="radio"
        onChange={() => setsortBy("LOW_TO_HIGH")}
        checked={sortBy === "LOW_TO_HIGH"}
      />{" "}
      Low-to-High &nbsp;
      <input
        type="radio"
        onChange={() => setsortBy("HIGH_TO_LOW")}
        checked={sortBy === "HIGH_TO_LOW"}
      />{" "}
      High-to-Low &nbsp;
    </div>
  );
};
