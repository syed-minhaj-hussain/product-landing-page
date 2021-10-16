import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsDB";
import productStyle from "./product.module.css";

export const ProductsByBrand = () => {
  const { brandName } = useParams();
  console.log(brandName);
  const filteredProduct = products.productDB?.filter(
    (product) => product.brand === brandName
  );
  console.log(filteredProduct);
  return (
    <div className={productStyle.container}>
      <div className={productStyle.main}>
        {filteredProduct?.map(
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
