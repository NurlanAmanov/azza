import React, { createContext, useContext, useState, useEffect } from 'react';

// Sepet kontekstini yaratmaq
const BasketContext = createContext();

// Sepet kontekst provayderi
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // localStorage-dən sepete məhsulları yükləmək
  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(storedBasket);

    console.log("Sepet localStorage-dən yükləndi:", storedBasket); // Log əlavə etdik
  }, []);

  // localStorage-ə yazmaq
  useEffect(() => {
    if (basket.length > 0) {
      localStorage.setItem('basket', JSON.stringify(basket));
      console.log("Sepet localStorage-ə yazıldı:", basket); // Log əlavə etdik
    }
  }, [basket]);

  // Sepetə məhsul əlavə etmək
  const addToBasket = (product, quantity) => {
    const existingProductIndex = basket.findIndex(item => item.id === product.id);
    
    if (existingProductIndex >= 0) {
      const updatedBasket = [...basket];
      updatedBasket[existingProductIndex].quantity += quantity;
      setBasket(updatedBasket);
      console.log(`Məhsul sayını artırdıq: ${product.title} - Yeni say: ${updatedBasket[existingProductIndex].quantity}`); // Log əlavə etdik
    } else {
      const updatedProduct = { ...product, quantity };
      setBasket([...basket, updatedProduct]);
      console.log(`Yeni məhsul əlavə edilib: ${product.title}, Say: ${quantity}`); // Log əlavə etdik
    }
  };

  // Sepetteki məhsulları əldə etmək
  const getBasketItems = () => basket;

  return (
    <BasketContext.Provider value={{ basket, addToBasket, getBasketItems }}>
      {children}
    </BasketContext.Provider>
  );
};

// Sepet kontekstini istifadə etmək üçün hook
export const useBasket = () => useContext(BasketContext);
