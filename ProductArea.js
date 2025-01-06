import React, { useState } from "react";
import "./ProductArea.css";


const products = [
  {
    img1: "assets/images/products21-min.jpg",
    img2: "assets/images/products1-min.jpg",
    title: "Mangosteen Organic From VietNamese",
    subtitle: "Fresh Fruits, Vegetables",
    price: "$56.00",
    discountPrice: "$19.00",
    rating: 5,
    type: "Organic",
    mfg: "August 4.2021",
    life: "60 days",
  },
  {
    img1: "assets/images/products22-min.jpg",
    img2: "assets/images/products11-min.jpg",
    title: "Soda Sparkling Water Maker (Rose Gold)",
    subtitle: "Fresh Fruits",
    price: "$56.00",
    discountPrice: "$19.00",
    rating: 5,
    type: "Organic",
    mfg: "August 4.2021",
    life: "60 days",
  },
  {
    img1: "assets/images/products22-min.jpg",
    img2: "assets/images/products11-min.jpg",
    title: "HOT - Lettuce Fresh Produce Fruit Vegetables",
    subtitle: "Vegetables",
    price: "$56.00",
    discountPrice: "$19.00",
    rating: 5,
    type: "Organic",
    mfg: "August 4.2021",
    life: "60 days",
  },
  {
    img1: "assets/images/products22-min.jpg",
    img2: "assets/images/products11-min.jpg",
    title: "Pure Irish Beef Quarter Pounders",
    subtitle: "Fresh Fruits",
    price: "$56.00",
    discountPrice: "$19.00",
    rating: 5,
    type: "Organic",
    mfg: "August 4.2021",
    life: "60 days",
  },
  {
    img1: "assets/images/products22-min.jpg",
    img2: "assets/images/products11-min.jpg",
    title: "Ginger Fresh , Whole, Organic - 250gram",
    subtitle: "Fresh Fruits",
    price: "$56.00",
    discountPrice: "$19.00",
    rating: 5,
    type: "Organic",
    mfg: "August 4.2021",
    life: "60 days",
  },
  {
    img1: "assets/images/products22-min.jpg",
    img2: "assets/images/products11-min.jpg",
    title: "Laffy Taffy Laff Bites Gone Bananas - 4 Packs",
    subtitle: "Fresh Fruits",
    price: "$56.00",
    discountPrice: "$19.00",
    rating: 5,
    type: "Organic",
    mfg: "August 4.2021",
    life: "60 days",
  },

  // Add more products here...
];

const ProductArea = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6; // Show only 2 items per page for now

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);
  if (visibleProducts.length < itemsPerPage) {
    visibleProducts.push(...products.slice(0, itemsPerPage - visibleProducts.length));
  }

  return (
    <section className="product-area">
      <div
        className="product-list"
        style={{
          transform: `translateX(-${startIndex * 220}px)`,
        }}
      >
        {visibleProducts.map((product, index) => (
          <div className="tpproduct" key={index}>
            <div className="tpproduct__thumb">
              <a href="shop-details-4.html">
                <img src={product.img1} alt={product.title} className="product-img" />
              </a>
            </div>
            <div className="tpproduct__content">
              <h4 className="tpproduct__title">{product.title}</h4>
              <div className="tpproduct__price">
                <span>{product.price}</span>
                <del>{product.discountPrice}</del>
              </div>
              <div className="tpproduct__hover">
                <img src={product.img2} alt="Hover" className="hover-img" />
                <div className="hover-details">
                  <p>
                    <span>Type: {product.type}</span><br />
                    <span>Manufactured: {product.mfg}</span><br />
                    <span>Shelf Life: {product.life}</span><br />
                  </p>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="nav-button" onClick={handlePrev}>‹</button>
        <button className="nav-button" onClick={handleNext}>›</button>
      </div>
    </section>
  );
};

export default ProductArea;
