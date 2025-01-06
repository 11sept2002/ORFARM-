import './App.css';
import React from 'react';
import Slider from './components/Slider';
import Header from './components/Header'; 
import TopBar from './components/TopBar';
import MobileMenu from './components/MobileMenu'; 
import ProductArea from './components/ProductArea';
import Footer from './components/Footer';
import Swiper from './components/Swiper';
import FeatureArea from './components/FeatureArea';
import Banner from './components/Banner';
import BlogArea from './components/BlogArea';
import ProductCountdown from './components/ProductCountdown';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <MobileMenu />
      <Slider />
      <Swiper />
      <FeatureArea />
      <Banner/>
      <ProductArea />
      <ProductCountdown />
      <BlogArea />
      <Footer />
    </>
  );
}

export default App;
