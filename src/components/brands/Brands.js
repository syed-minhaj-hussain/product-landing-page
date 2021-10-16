import React from "react";
import { Link } from "react-router-dom";

export const Brands = () => {
  const nike = "Nike";
  const adidas = "adidas";
  const puma = "Puma";
  const usPolo = "US POLO";
  const reebok = "Reebok";
  return (
    <div>
      <Link to={`/brand/${nike}`}>Nike</Link> ||
      <Link to={`/brand/${adidas}`}>Adidas</Link> ||
      <Link to={`/brand/${puma}`}>Puma</Link> ||
      <Link to={`/brand/${usPolo}`}>US POLO</Link> ||
      <Link to={`/brand/${reebok}`}>Reebok</Link> ||
    </div>
  );
};
