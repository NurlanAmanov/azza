import React, { useState } from 'react';
import { useBasket } from '../../context/BasketContext'; // BasketContext-dən istifadə
import '../../Css/Modal.css';

const Modal = ({ isOpen, closeModal, product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToBasket } = useBasket(); // Sepetə məhsul əlavə etmək

  // Sayı artırmaq
  const increaseQuantity = () => setQuantity(quantity + 1);

  // Sayı azaltmaq
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Məhsulu sepete əlavə etmək
  const handleAddToCart = () => {
    addToBasket(product, quantity);
    closeModal(); // Modalı bağlamaq
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{product.title}</h2>
          <button className="close-modal" onClick={closeModal}>X</button>
        </div>
        <div className="modal-body">
          <img src={product.image} alt={product.title} className="modal-image" />
          <p>{product.category}</p>
          <p className="modal-price">{product.price} AZN</p>

          <div className="quantity">
            <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
            <input type="number" value={quantity} readOnly className="quantity-input" />
            <button className="quantity-btn" onClick={increaseQuantity}>+</button>
          </div>

          <div className="modal-actions">
            <button className="add-to-cart" onClick={handleAddToCart}>Səbətə at</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
