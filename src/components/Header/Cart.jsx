import React from 'react';
import { useBasket } from '../../context/BasketContext'; // BasketContext-dən istifadə edirik
import '../../Css/Cart.css'; // Modal və sepət üçün CSS

const Sebet = ({ isOpen, toggleCart }) => {
  const { basket, addToBasket } = useBasket(); // Sepet məlumatlarını alırıq və məhsul əlavə etmək üçün `addToBasket`-i alırıq

  // Sepet məhsulunun ümumi qiymətini hesablamaq
  const getTotalPrice = () => {
    return basket.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Sayı artırmaq
  const increaseQuantity = (product) => {
    addToBasket(product, 1); // Məhsul sayını artırırıq
  };

  // Sayı azaltmaq
  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      addToBasket(product, -1); // Məhsul sayını azaldırıq
    }
  };

  return (
    <>
      {/* Overlay - Arxa planın qaralması */}
      {isOpen && <div className="overlay" onClick={toggleCart}></div>}

      <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
        <div className="cart-content">
          <h2>Səbət</h2>
          {/* Sepet məhsullarını göstəriyirik */}
          <ul>
            {basket.length > 0 ? (
              basket.map((product) => (
                <li key={product.id}>
                  <div className="product-info">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <div className="product-details">
                      <p>{product.title}</p>
                      <p>{product.price} AZN</p>
                      <div className="quantity">
                        <button
                          className="quantity-btn"
                          onClick={() => decreaseQuantity(product)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={product.quantity}
                          readOnly
                          className="quantity-input"
                        />
                        <button
                          className="quantity-btn"
                          onClick={() => increaseQuantity(product)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p>Səbətiniz boşdur.</p>
            )}
          </ul>

          <div className="cart-total">
            <p>Ümumi: {getTotalPrice()} AZN</p>
          </div>
          
          <button className="checkout-btn" onClick={toggleCart}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Sebet;
