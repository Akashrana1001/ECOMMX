import React, { useEffect, useState } from 'react';
import { Heart, ShoppingCart, Leaf } from 'lucide-react';
import '../styles/Shopping.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingLogo from './LoadingLogo';
import image from '../assets/bamboo-Toothbrush.jpg';
import image1 from '../assets/resuable-bottle.jpg';
import image2 from '../assets/3453634.jpg';
import image3 from '../assets/reusable-bamboo-metal-straws.jpg';
import image4 from '../assets/phone.jpg';
import image5 from '../assets/solar-battery_1048944-19785130.avif';
import image6 from '../assets/beautiful-mandala-concept-with-copy-space.jpg';
import image7 from '../assets/macadamia-soap-skin-care-treatment.jpg';
import image8 from '../assets/woman-chair-applying-lotion.jpg';
import image9 from '../assets/medium-shot-smiley-woman-with-mat.jpg';
import image10 from '../assets/flat-lay-natural-herbs.jpg';
import image11 from '../assets/close-up-shot-transparent-coconut-oil.jpg';
import image12 from '../assets/flat-lay-arrangement-with-jeans-fabric.jpg';
import image13 from '../assets/gst_bg_079_20.jpg';
import image14 from '../assets/furoshiki-package-plant-arrangement.jpg';

const sampleProducts = [
  {
    id: 1,
    name: 'Bamboo Toothbrush',
    price: 3.99,
    image: image,
    ecoFeatures: ['Biodegradable', 'Plastic-free'],
  },
  {
    id: 2,
    name: 'Reusable Water Bottle',
    price: 12.49,
    image: image1,
    ecoFeatures: ['Zero-waste', 'Durable'],
  },
  {
    id: 3,
    name: 'Organic Cotton Tote Bag',
    price: 8.75,
    image: image2,
    ecoFeatures: ['Reusable', 'Organic'],
  },
  {
    id: 4,
    name: 'Compostable Phone Case',
    price: 14.99,
    image: image4,
    ecoFeatures: ['Compostable', 'Plastic-free'],
  },
  {
    id: 5,
    name: 'Stainless Steel Straw Set',
    price: 5.99,
    image: image3,
    ecoFeatures: ['Reusable', 'Plastic-free'],
  },
  {
    id: 6,
    name: 'Solar Power Bank',
    price: 25.99,
    image: image5,
    ecoFeatures: ['Solar-powered', 'Energy-saving'],
  },
  {
    id: 7,
    name: 'Eco-Friendly Notebooks',
    price: 6.49,
    image: image6,
    ecoFeatures: ['Recycled paper', 'Sustainable'],
  },
  {
    id: 8,
    name: 'Plant-Based Soap Bar',
    price: 4.25,
    image: image7,
    ecoFeatures: ['Chemical-free', 'Vegan'],
  },
  {
    id: 9,
    name: 'Reusable Beeswax Wraps',
    price: 9.99,
    image: image8,
    ecoFeatures: ['Zero-waste', 'Plastic-free'],
  },
  {
    id: 10,
    name: 'Eco Yoga Mat',
    price: 29.99,
    image: image9,
    ecoFeatures: ['Non-toxic', 'Biodegradable'],
  },
  {
    id: 11,
    name: 'Natural Deodorant',
    price: 6.99,
    image: image10,
    ecoFeatures: ['Aluminum-free', 'Natural scent'],
  },
  {
    id: 12,
    name: 'Organic Lip Balm',
    price: 3.49,
    image: image11,
    ecoFeatures: ['Cruelty-free', 'Organic'],
  },
  {
    id: 13,
    name: 'Recycled Denim Journal',
    price: 7.99,
    image: image12,
    ecoFeatures: ['Recycled', 'Sustainable'],
  },
  {
    id: 14,
    name: 'Biodegradable Trash Bags',
    price: 11.99,
    image: image13,
    ecoFeatures: ['Compostable', 'Zero-waste'],
  },
  {
    id: 15,
    name: 'Eco Bamboo Cutlery',
    price: 6.50,
    image: image14,
    ecoFeatures: ['Reusable', 'Natural material'],
  }
];

const Shopping = ({ addToCart, toggleWishlist }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
    
    const loadImages = async () => {
      const imagePromises = sampleProducts.map(product => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = product.image;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(imagePromises);
      setTimeout(() => setIsLoading(false), 1000); // Minimum loading time for smooth transition
    };

    loadImages();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <LoadingLogo />
        <p className="loading-text">Loading eco-friendly products...</p>
      </div>
    );
  }

  return (
    <div className="shopping-page">
      <h1 className="shop-title" data-aos="fade-down">Eco-Friendly Products</h1>
      <div className="product-grid">
        {sampleProducts.map((product) => (
          <div className="product-card" data-aos="zoom-in" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">${product.price.toFixed(2)}</p>

              {product.ecoFeatures && (
                <div className="eco-tags">
                  {product.ecoFeatures.slice(0, 2).map((feature, i) => (
                    <span key={i} className="eco-tag">
                      <Leaf size={12} /> {feature}
                    </span>
                  ))}
                </div>
              )}

              <div className="product-actions">
                <button 
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart size={18} /> Add to Cart
                </button>
                <button 
                  className="wishlist-btn"
                  onClick={() => toggleWishlist(product)}
                >
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;