import { data } from "autoprefixer";
import React, { createContext, useContext, useEffect, useState } from "react";

export const ContextProvider = createContext();

function Context({ children }) {
  const [productId, setProductId] = useState();
  const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   const data = localStorage.getItem("Shoping-Cart");
  //   setCartItems(!JSON.parse(data) ? JSON.parse(data) : []);
  // }, []);
  // useEffect(() => {
  //   if (cartItems !== undefined) {
  //     const data = localStorage.setItem(
  //       "Shoping-Cart",
  //       JSON.stringify(cartItems)
  //     );
  //   }
  // }, [cartItems]);
  function addToCart(id, title, price, image) {
    if (!cartItems?.find((item) => item.id === id)) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          count: 1,
          title: title,
          image: image,
          price: price,
        },
      ]);
    } else
      setCartItems(
        cartItems?.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count + 1,
            };
          } else return item;
        })
      );
    console.log(cartItems);
  }

  function removeFromCart(id) {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count === 0 ? 0 : item.count - 1,
          };
        } else return item;
      })
    );
  }

  function productIdHandler(id) {
    return setProductId(id);
  }
  const value = {
    productId,
    setProductId: productIdHandler,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
}

export default Context;
