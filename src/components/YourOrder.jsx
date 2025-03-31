import React from 'react';
import { Star, Repeat } from "lucide-react";
import shirt1 from '../assets/shirt1.jpg';
import Parka from '../assets/Parka.jpg';
import { hr } from 'framer-motion/client';

const YourOrder = () => {
    return (
        <div className="min-h-screen bg-black text-white p-6">
            {/* Top section */}
            <div className="mb-4">
                <h1 className="text-3xl font-bold">Your Order</h1>
            </div>

            {/* Button Section */}
            <div className="flex space-x-4 bg-gray-800 p-4 rounded-lg shadow-md w-max">
                <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition">
                    Order
                </button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 transition">
                    Not Yet Shipped
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition">
                    Cancelled Order
                </button>
            </div>

            {/* Order Container */}
            <div className="bg-white text-black p-6 rounded-lg shadow-md mt-6 ">
                <div className="flex justify-between border-gray-900 pb-4 bg-gray-300 p-4 rounded-md">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-lg">Order Placed</h1>
                        <p className="text-gray-600">March 30, 2025</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-lg">Total</h1>
                        <p className="text-gray-600">₹4000</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-lg">Ship To</h1>
                        <p className="text-gray-600">XYZ</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-lg">Order #112-0822160-5390023</h1>

                        {/* Buttons: View Order Details & View Invoice */}
                        <div className="flex justify-center gap-4 mt-4">
                            <button className='flex items-center gap-2 border bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition font-bold'>
                                View your item
                            </button>
                            <button className='flex items-center gap-2  border bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition font-bold'>
                                Track package
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ratings Section */}
                <div className='bg-yellow-100 text-black p-4 rounded-lg shadow-md mt-6 border border-yellow-600'>
                    <div className="flex items-center text-yellow-400 text-base md:text-lg">
                        {[...Array(1)].map((_, i) => (
                            <Star key={i} size={20} fill="currentColor" className="mr-1" />
                        ))}
                        <span className="text-black font-bold text-sm ml-2">Please rate your experience with the seller</span>
                    </div>
                </div>

                {/* Delivery Section */}
                <div className='p-4 mt-6  rounded-lg shadow-md border border-gray-300'>
                    <h1 className='font-bold mb-4 text-lg'>Delivery March 31</h1>
                    <hr />
                    <div className='space-y-4'>
                        {[1, 2, 3, 4].map((item, index) => (
                            <div key={index} className='flex items-center gap-4  p-4 rounded-lg '>
                                <img hr src={shirt1} alt="Product" className="w-32 h-32 object-cover rounded-md" />



                                <br />
                                <div>
                                    <p className='text-gray-800 font-medium'>SAMSUNG 980 PRO SSD 2TB PCle NVMe Gen 4 Gaming M.2 Internal Solid State Drive Memory Card...</p>
                                    <h6 className='text-yellow-600 mt-2'>Return or replace items: Eligible through July 5, 2023</h6>
                                    <div className='flex gap-4 mt-4 font-bold'>

                                        <button className='flex items-center gap-2  bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition text-white'>
                                            <Repeat size={16} /> Buy It Again
                                        </button>
                                        <button className='flex items-center gap-2 border bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition'>
                                            View your item
                                        </button>
                                        <button className='flex items-center gap-2  border bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition'>
                                            Track package
                                        </button>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='p-4 mt-6 bg-white rounded-lg shadow-md border border-gray-300'>
                    <h1 className='font-bold mb-4 text-lg'>Delivery March 31</h1>
                    <div className='space-y-4'>
                        <hr />
                        {[1, 2, 3, 4].map((item, index) => (

                            <div key={index} className='flex items-center gap-4 bg-white p-4 rounded-lg '>
                                <img src={Parka} alt="Product" className="w-32 h-32 object-cover rounded-md" />
                                <br />
                                <div>


                                    <p className='text-gray-800 font-medium'>SAMSUNG 980 PRO SSD 2TB PCle NVMe Gen 4 Gaming M.2 Internal Solid State Drive Memory Card...</p>
                                    <h6 className='text-yellow-600 mt-2'>Return or replace items: Eligible through July 5, 2023</h6>
                                    <div className='flex gap-4 mt-4 font-bold'>

                                        <button className='flex items-center gap-2  bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition text-white'>
                                            <Repeat size={16} /> Buy It Again
                                        </button>
                                        <button className='flex items-center gap-2 border bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition'>
                                            View your item
                                        </button>
                                        <button className='flex items-center gap-2  border bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition'>
                                            Track package
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourOrder;
