import React, { useState } from "react";
import girljacket from "../assets/girljacket.jpg";
import dress1 from "../assets/dress1.jpg";
import shirt1 from "../assets/shirt1.jpg";
import shirt2 from "../assets/shirt2.jpg";
import shirt3 from "../assets/shirt3.jpg";
import { Star } from "lucide-react";

export default function ProductDes() {
    const [mainImage, setMainImage] = useState(girljacket);
    const thumbnails = [girljacket, dress1, shirt1, shirt2, shirt3];

    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-gray-800 p-6 flex items-center justify-center">

            <div className="w-full md:w-1/2 flex flex-col items-center">
                <img src={mainImage} alt="Leather Jacket" className="w-72 md:w-96 rounded-lg shadow-lg" />

                <p className="text-green-400 mt-1 text-lg font-semibold bg-white text-black px-3 py-1 rounded-md">In Stock</p>
                <div className="mt-4 w-full flex justify-center overflow-x-auto gap-2 p-2 scrollbar-hide">
                    {thumbnails.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="Thumbnail"
                            className="w-20 h-20 rounded-md shadow-md cursor-pointer hover:opacity-80"
                            onClick={() => setMainImage(image)}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-6 text-gray-300 space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white">Leather Jacket</h1>
                <p className="text-gray-400 text-base md:text-lg">Premium Fashion Wear</p>
                <div className="flex items-center text-yellow-400 text-base md:text-lg">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" className="mr-1" />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">(1,234 ratings)</span>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-green-400">₹3000</p>
                <select className="w-full p-2 md:p-3 border rounded-md bg-gray-800 text-white mt-3 text-base md:text-lg">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XL</option>
                    <option>XXXL</option>
                </select>
                <p className="text-xs md:text-sm mt-3">Free delivery within 3-5 days</p>
                <div className="flex gap-4 mt-4 md:mt-6">
                    <button className="w-1/2 bg-yellow-500 text-white py-2 md:py-3 rounded-md font-semibold text-base md:text-lg hover:bg-yellow-600">Add to Cart</button>
                    <button className="w-1/2 bg-orange-500 text-white py-2 md:py-3 rounded-md font-semibold text-base md:text-lg hover:bg-orange-600">Buy Now</button>
                </div>
            </div>

        </div>
    );
}
