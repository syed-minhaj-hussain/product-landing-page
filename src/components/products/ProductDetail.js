import React, { useState } from "react";
import products from "../../productsDB.json";
import { Filter } from "../filterProducts/Filter";
import productStyle from "./product.module.css";

export const ProductDetail = () => {
  const [sortBy, setsortBy] = useState("LOW_TO_HIGH");
  const [size, setSize] = useState("S");
  const sortedProducts = products.productDB.sort((x, y) => {
    if (sortBy === "LOW_TO_HIGH") {
      return x["price"] - y["price"];
    }
    return y["price"] - x["price"];
  });

  const sortBySize = sortedProducts?.filter((product) => {
    if (product.size.includes(size)) {
      console.log(size, "Size");
      return product;
    }
    // return false;
  });

  // console.log(sortBy);
  // console.log(sortedProducts);
  // console.log(sortBySize);
  // console.log(size);
  return (
    <div className={productStyle.container}>
      <Filter
        sortBy={sortBy}
        setsortBy={setsortBy}
        size={size}
        setSize={setSize}
      />
      <div className={productStyle.main}>
        {sortBySize?.map(({ name, image, price, id, brand, size }) => (
          <div className={productStyle.card} key={id}>
            <img src={image} className={productStyle.image} alt={name} />
            <p style={{ fontWeight: "bold" }}>{name}</p>
            <p style={{ fontWeight: "bold", color: "darkslategray" }}>
              {" "}
              {brand}
            </p>
            <p>
              Size :{" "}
              {size.map((sizes) => (
                <span
                  style={{
                    border: "0.1rem solid black",
                    padding: "0.1rem 0.2rem",
                    marginRight: "0.2rem",
                  }}
                >
                  {sizes}
                </span>
              ))}
            </p>
            <p> ₹{price}</p>
            <button className={productStyle.btn}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
