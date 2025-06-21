import React, { useState } from 'react';
import products from '../../js/data'; // Məhsul məlumatları burada saxlanılır
import Modal from './Modal'; // Modal komponentini import edirik
import { useBasket } from '../../context/BasketContext'; // BasketContext-dən istifadə edirik

function Corek() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToBasket } = useBasket(); // Sepetə məhsul əlavə etmək

  // Modalı açma funksiyası
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true); // Modalı açırıq
  };

  // Modalı bağlama funksiyası
  const closeModal = () => {
    setIsModalOpen(false); // Modalı bağlayırıq
  };

  return (
    <>
      <div className="lastBlock cuisineItems">
        <div className="container flex center newItemBlock mx-12">
          {/* Bütün qruplarda (array daxilində) "Peçenye" kateqoriyasına aid olan məhsulları filtr edirik */}
          {products
            .flat() // Bütün qrupları birləşdiririk
            .filter((product) => product.category === 'Peçenye') // Yalnız "Peçenye" olanları filtr edirik
            .map((product) => (
              <div className="newItem" data-aos="fade-up" key={product.id}>
                <div className="scaleImage">
                  {/* Məhsula bax düyməsi ilə modalı açırıq */}
                  <a
                    href="#"
                    className="cuisineLink mainColor fs-10 w-600 uppercase"
                    onClick={() => openModal(product)} // Məhsul məlumatını modalda göstərmək
                  >
                    Məhsula bax
                  </a>
                  <img src={product.image} alt={product.title} />
                </div>
                <p className="type uppercase textCenter fs-10 w-600">{product.category}</p>
                <p className="newItem-name textCenter fs-15 bold">
                  <a href="#">{product.title}</a>
                </p>
                <p className="price textCenter fs-15">{product.price} AZN</p>
              </div>
            ))}
        </div>
      </div>

      {/* Modalı yalnız isModalOpen true olduqda göstəririk */}
      {isModalOpen && <Modal isOpen={isModalOpen} closeModal={closeModal} product={selectedProduct} />}
    </>
  );
}

export default Corek;
