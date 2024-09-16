import React from "react";
import Category from "../UI/Category";
import ListItemLayout from "./ListAllProducts";

function ProductItemLayout() {
  return (
    <div className="flex flex-col lg:flex-row-reverse ">
      <Category />
      <ListItemLayout />
    </div>
  );
}

export default ProductItemLayout;
