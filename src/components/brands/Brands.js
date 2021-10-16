import React from "react";
import { Link } from "react-router-dom";

export const Brands = () => {
  const nike = "Nike";
  const adidas = "adidas";
  const puma = "Puma";
  const usPolo = "US POLO";
  const reebok = "Reebok";
  return (
    <div style={{ marginTop: "3.5rem" }}>
      <Link
        to={`/brand/${nike}`}
        style={{
          textDecoration: "none",
          padding: "0.25rem 0.5rem",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        Nike
      </Link>{" "}
      <Link
        to={`/brand/${adidas}`}
        style={{
          textDecoration: "none",
          padding: "0.25rem 0.5rem",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        Adidas
      </Link>{" "}
      <Link
        to={`/brand/${puma}`}
        style={{
          textDecoration: "none",
          padding: "0.25rem 0.5rem",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        Puma
      </Link>{" "}
      <Link
        to={`/brand/${usPolo}`}
        style={{
          textDecoration: "none",
          padding: "0.25rem 0.5rem",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        US POLO
      </Link>{" "}
      <Link
        to={`/brand/${reebok}`}
        style={{
          textDecoration: "none",
          padding: "0.25rem 0.5rem",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        Reebok
      </Link>{" "}
    </div>
  );
};
