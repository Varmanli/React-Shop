import React, { createContext, useEffect, useState } from "react";

export const ContextProvider = createContext();

function Context({ children }) {
  const [productId, setProductId] = useState();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  function addToCart(id, title, price, image) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [
        ...prevItems,
        {
          id,
          count: 1,
          title,
          image,
          price,
        },
      ];
    });
  }

  function removeFromCart(id) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  }

  function productIdHandler(id) {
    setProductId(id);
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
