import React from 'react';
import { Home, Package, Zap, Users, BarChart, Bell, Settings, Search, Edit, Trash2, Filter } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Parka from '../assets/parka.jpg';
import bomber from '../assets/bomber.jpg';

const flashSales = [
    { product: "Parka", image: Parka, start: "20-07-2024", end: "28-07-2024", stock: 79, status: "Upcoming" },
    { product: "Parka", image: Parka, start: "15-07-2024", end: "25-07-2024", stock: 86, status: "Ongoing" },
    { product: "Parka", image: Parka, start: "08-07-2024", end: "15-07-2024", stock: 74, status: "Upcoming" },
    { product: "Parka", image: Parka, start: "20-07-2024", end: "30-07-2024", stock: 69, status: "Ongoing" },
    { product: "Parka", image: Parka, start: "12-07-2024", end: "20-07-2024", stock: 69, status: "Expired" },
    { product: "Parka", image: Parka, start: "05-07-2024", end: "15-07-2024", stock: 65, status: "Upcoming" },
    { product: "Parka", image: Parka, start: "10-05-2024", end: "20-05-2024", stock: 58, status: "Ongoing" },
    { product: "Parka", image: Parka, start: "25-05-2024", end: "30-05-2024", stock: 58, status: "Expired" },
];

const statusColor = (status) => {
    switch (status) {
        case "Upcoming":
            return "bg-blue-100 text-blue-700";
        case "Ongoing":
            return "bg-green-100 text-green-700";
        case "Expired":
            return "bg-red-100 text-red-700";
        default:
            return "bg-gray-100 text-gray-700";
    }
};

const Admine = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-60 p-4 bg-black text-white shadow-xl border-r border-gray-700">
                <h2 className="text-xl font-bold mb-6">THE GREEN OUTLET</h2>
                <ul className="space-y-4">
                    <li className="flex items-center gap-2 hover:text-indigo-500 cursor-pointer" onClick={() => navigate('/')}>
                        <Home size={20} /> Dashboard
                    </li>
                    <li className="flex items-center gap-2 hover:text-indigo-500 cursor-pointer" onClick={() => navigate('/products')}>
                        <Package size={20} /> Products
                    </li>
                    <li className="flex items-center gap-2 hover:text-indigo-500 cursor-pointer" onClick={() => navigate('/flash-sales')}>
                        <Zap size={20} /> Flash Sales
                    </li>
                    <li className="flex items-center gap-2 hover:text-indigo-500 cursor-pointer" onClick={() => navigate('/customers')}>
                        <Users size={20} /> Customers
                    </li>
                    <li className="flex items-center gap-2 hover:text-indigo-500 cursor-pointer" onClick={() => navigate('/analytics')}>
                        <BarChart size={20} /> Analytics
                    </li>
                    <li className="flex items-center gap-2 hover:text-indigo-500 cursor-pointer" onClick={() => navigate('/notifications')}>
                        <Bell size={20} /> Notifications
                    </li>
                    <li className="flex items-center gap-2 hover:text-indigo-500 cursor-pointer" onClick={() => navigate('/settings')}>
                        <Settings size={20} /> Settings
                    </li>
                </ul>

                {/* Logout Button */}
                <button className="mt-10 px-6 py-2 text-white bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-lg 
                hover:from-red-600 hover:to-red-800 transition-all duration-300 ease-in-out transform hover:scale-105">
                    Log Out
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <nav className="fixed top-0 left-60 w-[calc(100%-240px)] px-6 py-4 shadow-md bg-black z-50 text-white flex justify-between items-center">
                    <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/ourproduct')}>
                        Flash Sale
                    </div>

                    <div className="flex gap-6 items-center text-white">
                        <button onClick={() => navigate('/bell')} className="hover:text-blue-500 flex items-center gap-1">
                            <Bell size={24} />
                        </button>

                        <button onClick={() => navigate('/search')} className="hover:text-blue-500 flex items-center gap-1">
                            <Search size={24} />
                        </button>

                        <button onClick={() => navigate('/profile')} className="hover:text-blue-500 flex items-center gap-2">
                            <img src={bomber} alt="Profile" className="w-10 h-10 rounded-full border" />
                        </button>
                    </div>
                </nav>

                {/* Page Content */}
                <main className="flex-1 p-6 mt-16">

                    <div className="flex items-center justify-between mb-4 bg-gray-100 ">

                        <div className="flex items-center gap-3">

                            <h1 className="text-xl font-semibold">Flash Sales</h1>
                        </div>

                        <div className="flex gap-4">

                            <button className="px-4 py-2 bg-amber-400 text-gray-700 rounded-lg hover:bg-amber-300 transition">
                                <Filter size={18} className="inline-block mr-2" />
                                Filter
                            </button>


                            <button className="px-4 py-2 bg-stone-800 text-white rounded-lg shadow-md hover:bg-stone-600 transition">
                                See All
                            </button>

                            <button className="px-4 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-600 transition">
                                Add Product
                            </button>
                        </div>

                    </div>

                    <div className="overflow-x-auto bg-gray shadow rounded-xl">
                        <table className="w-full table-auto text-sm">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="text-left p-3">Product Image</th>
                                    <th className="text-left p-3">Product Name</th>
                                    <th className="text-left p-3">Start Date</th>
                                    <th className="text-left p-3">End Date</th>
                                    <th className="text-left p-3">Stock</th>
                                    <th className="text-left p-3">Status</th>
                                    <th className="text-left p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {flashSales.map((item, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="border-b hover:bg-gray-50"
                                    >
                                        <td className="p-3">
                                            <img src={item.image} alt={item.product} className="w-12 h-12 object-cover rounded-lg" />
                                        </td>
                                        <td className="p-3">{item.product}</td>
                                        <td className="p-3">{item.start}</td>
                                        <td className="p-3">{item.end}</td>
                                        <td className="p-3">{item.stock}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="p-3 flex gap-4">
                                            <button className="text-gray-500 hover:text-gray-700"><Edit size={18} /></button>
                                            <button className="text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Admine;
