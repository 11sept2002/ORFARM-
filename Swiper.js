

import React from 'react';               // React import
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide components
import 'swiper/css';                      // Import Swiper styles
import './Swiper.css';                     // Import custom CSS for this component (optional)

// Define categories data
const categories = [
    { title: 'Vegetables', imgSrc: 'assets/imges/img-1.svg', count: 5, link: 'shop-details-4.html' },
    { title: 'Fresh Fruits', imgSrc: 'assets/imges/img-2.svg', count: 6, link: 'shop-details-3.html' },
    { title: 'Fruit Drink', imgSrc: 'assets/imges/img-3.svg', count: 9, link: 'shop-details-3.html' },
    { title: 'Fresh Bakery', imgSrc: 'assets/imges/img-4.svg', count: 11, link: 'shop-details-3.html' },
    { title: 'Biscuits Snack', imgSrc: 'assets/imges/img-5.svg', count: 2, link: 'shop-details-3.html' },
    { title: 'Fresh Meat', imgSrc: 'assets/imges/img-6.svg', count: 16, link: 'shop-details-3.html' },
    { title: 'Fresh Milk', imgSrc: 'assets/imges/img-7.svg', count: 10, link: 'shop-details-3.html' },
    { title: 'Sea Foods', imgSrc: 'assets/imges/img-8.svg', count: 11, link: 'shop-details-3.html' },
];

// Category Swiper component
const SwiperComponent = () => {
  return (
    <section className="category-area grey-bg pb-40">
      <div className="container">
        {/* Swiper slider */}
        <Swiper
          spaceBetween={10}          // Space between slides
          slidesPerView={4}          // Number of slides visible at once
          loop={true}                // Enable loop
          autoplay={{
            delay: 3000,             // Time interval between slides
            disableOnInteraction: false,  // Keep autoplay going after interaction
          }}
        >
          {/* Map through categories and create each slide */}
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="category__item mb-30">
                <div className="category__thumb fix mb-15">
                  <a href={category.link}>
                    <img src={category.imgSrc} alt="category-thumb" />
                  </a>
                </div>
                <div className="category__content">
                  <h5 className="category__title">
                    <a href={category.link}>{category.title}</a>
                  </h5>
                  <span className="category__count">{`${category.count} items`}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperComponent;
