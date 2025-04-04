import React, { useState, useMemo } from 'react';
import { Menu, X, ShoppingCart, Heart, Search } from 'lucide-react'; // Add Search here
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import bomber from '../assets/bomber.jpg';
import dress1 from '../assets/dress1.jpg';
import Parka from '../assets/Parka.jpg';
import girljacket from '../assets/girljacket.jpg';
import puffer from '../assets/puffer.jpg';
import shirt1 from '../assets/shirt1.jpg';
import shirt2 from '../assets/shirt2.jpg';
import shirt3 from '../assets/shirt3.jpg';
import shirt4 from '../assets/shirt4.jpg';

const ourproduct = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const products = [
    { name: 'Eligio Jacket in Wool', image: dress1, originalPrice: 9050, price: 3650 },
    { name: 'Bomber Black Jacket', image: bomber, originalPrice: 5000, price: 2450 },
    { name: 'Puffer Jacket in Blac', image: Parka, originalPrice: 5000, price: 2450 },
    { name: 'Stylish Striped Shirt', image: girljacket, originalPrice: 5000, price: 2450 },
    { name: 'Buttoned Denim Shirt', image: puffer, originalPrice: 5000, price: 2450 },
    { name: 'Shirt', image: shirt2, originalPrice: 5000, price: 2450 },
    { name: 'Jeans', image: shirt3, originalPrice: 5000, price: 2450 },
    { name: 'Wool Jacket', image: shirt4, originalPrice: 5000, price: 2450 }
  ];

  const sendMessageToWhatsApp = () => {
    const phoneNumber = ""; // Replace with your actual WhatsApp number
    const message = encodeURIComponent("Hello! I am interested in your products.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  // Use useMemo to filter products based on search term
  const filteredProducts = useMemo(() => {
    if (searchTerm) {
      return products.filter((each_product) =>
        each_product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return products;
    }
  }, [searchTerm]);

  return (
    <div>
      <div>
        <nav className="w-full px-6 py-4 shadow-md bg-black fixed top-0 z-50">
          <div className="flex items-center justify-between">
            {/* Left side links */}
            <div className="hidden md:flex gap-6 font-medium text-white">
              <button onClick={() => navigate('/shop')} className="hover:text-blue-500">Shop</button>
              <button onClick={() => navigate('/new-collection')} className="hover:text-blue-500">New Collection</button>
              <button onClick={() => navigate('/catalog')} className="hover:text-blue-500">Catalog</button>
            </div>

            {/* Center Brand */}
            <div className="text-2xl font-bold text-center text-white cursor-pointer" onClick={() => navigate('/ourproduct')}>THE GREEN OUTLET</div>

            {/* Right side icons */}
            <div className="hidden md:flex gap-6 items-center text-white">
              <button onClick={() => navigate('/cart')} className="hover:text-blue-500 flex items-center gap-1">
                <ShoppingCart size={22} /> Cart
              </button>
              <button onClick={() => navigate('/wishlist')} className="hover:text-blue-500 flex items-center gap-1">
                <Heart size={22} /> Wishlist
              </button>

              <button
                onClick={sendMessageToWhatsApp}
                className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
              >
                Support
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden text-white">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="flex flex-col gap-4 mt-4 md:hidden text-center text-white">
              <button onClick={() => navigate('/shop')} className="hover:text-blue-500">Shop</button>
              <button onClick={() => navigate('/new-collection')} className="hover:text-blue-500">New Collection</button>
              <button onClick={() => navigate('/catalog')} className="hover:text-blue-500">Catalog</button>
              <button onClick={() => navigate('/cart')} className="hover:text-blue-500 flex items-center justify-center gap-1">
                <ShoppingCart size={22} /> Cart
              </button>
              <button onClick={() => navigate('/wishlist')} className="hover:text-blue-500 flex items-center justify-center gap-1">
                <Heart size={22} /> Wishlist
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* New section after navbar */}
      <div className="pt-32 px-6 bg-black text-white">
        <h1 className="text-4xl font-bold text-center mb-10 ">OUR PRODUCT</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-xl mb-4">COLLECTIONS</h2>
            <ul className="space-y-2">
              {['New Arrival', 'Ready to Wear', 'Shoes', 'Accessories', 'Essentials', 'Oils'].map(item => (
                <li key={item} className="hover:text-blue-500 cursor-pointer">{item}</li>
              ))}
            </ul>

            <h2 className="text-xl mt-6 mb-4">SIZE</h2>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'X', 'XL'].map(size => (
                <button key={size} className="border p-2 w-10 text-center hover:bg-blue-500">{size}</button>
              ))}
            </div>

            <h2 className="text-xl mt-6 mb-4">COLORS</h2>
            <div className="flex gap-2">
              {['bg-red-500', 'bg-gray-500', 'bg-orange-500', 'bg-emerald-500', 'bg-blue-500'].map(color => (
                <div key={color} className={`w-6 h-6 ${color} border cursor-pointer`}></div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div className="flex border px-2 py-1 items-center bg-gray-800 rounded">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none px-2 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search size={20} />
              </div>
              <select className="bg-gray-800 p-2 rounded">
                <option>Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Product Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div className="text-center" key={product.name}>
                  <img src={product.image} alt="Product" className="mx-auto w-64 h-80 object-cover" />
                  <p className="mt-2">{product.name}</p>
                  <p className="text-gray-400 line-through">${product.originalPrice}</p>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourproduct;

