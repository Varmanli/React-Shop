import React, { createContext, useEffect, useState } from "react";

export const ContextProvider = createContext();

function Context({ children }) {
  const [productId, setProductId] = useState();
  const [cartItems, setCartItems] = useState([]);

  // بازیابی سبد خرید از localStorage در بارگذاری اولیه
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // ذخیره سبد خرید در localStorage هر بار که cartItems تغییر کند
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // افزودن محصول به سبد خرید
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

  // حذف محصول از سبد خرید یا کاهش تعداد
  function removeFromCart(id) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  }

  // ذخیره id محصول انتخابی
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
