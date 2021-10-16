import React from "react";
import { products } from "../../productsDB";
import productStyle from "./product.module.css";

export const ProductDetail = () => {
  return (
    <div className={productStyle.container}>
      <div className={productStyle.main}>
        {products?.productDB?.map(
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
