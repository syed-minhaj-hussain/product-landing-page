import React, { useState } from "react";
import { products } from "../../productsDB";
import { Filter } from "../filterProducts/Filter";
import productStyle from "./product.module.css";

export const ProductDetail = () => {
  const [sortBy, setsortBy] = useState("LOW_TO_HIGH");
  const sortedProducts = products.productDB.sort((x, y) => {
    if (sortBy === "LOW_TO_HIGH") {
      return x["price"] - y["price"];
    }
    return y["price"] - x["price"];
  });
  console.log(sortBy);
  console.log(sortedProducts);
  return (
    <div className={productStyle.container}>
      <Filter sortBy={sortBy} setsortBy={setsortBy} />
      <div className={productStyle.main}>
        {sortedProducts?.map(
          ({ name, description, image, price, id, inStock, fastDelivery }) => (
            <div className={productStyle.card} key={id}>
              <img src={image} className={productStyle.image} alt={name} />
              <p style={{ fontWeight: "bold" }}>{name}</p>
              <p> ₹{price}</p>
              <button className={productStyle.btn}>Add To Cart</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};
