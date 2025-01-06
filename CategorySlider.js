import React from "react";
import "./CategorySlider.css";

import Vegetables from ".src/assets/images/Vegetables.jpeg";
import Fruits from ".src/assets/images/Fruits.jpeg";
import Juice from ".src/assets/images/Juice.jpeg";
import Bread from ".src/assets/images/Bread.jpeg";
import Snacks from ".src/assets/images/Snacks.jpeg";
import Meat from ".src/assets/images/Meat.jpeg";
import Milk from ".src/assets/images/Milk.jpeg";
import SeaFoods from ".src/assets/images/SeaFoods.jpeg";

const categories = [
  { id: 1, name: "Vegetables", items: 5, image: Vegetables },
  { id: 2, name: "Fruits", items: 6, image: Fruits },
  { id: 3, name: "Juice", items: 9, image: Juice },
  { id: 4, name: "Bread", items: 11, image: Bread },
  { id: 5, name: "Snack", items: 2, image: Snacks },
  { id: 6, name: "Meat", items: 16, image: Meat },
  { id: 7, name: "Milk", items: 10, image: Milk },
  { id: 8, name: "SeaFoods", items: 11, image: SeaFoods },
];

const CategorySlider = () => {
  return (
    <div className="category-slider">
      {categories.map((category) => (
        <div className="category-card" key={category.id}>
          <div className="category-image">
            <img src={category.image} alt={category.name} />
            <div className="hover-overlay">
              <span className="plus-symbol">+</span>
            </div>
          </div>
          <h3 className="category-name">{category.name}</h3>
          <p className="category-items">{category.items} items</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySlider;
