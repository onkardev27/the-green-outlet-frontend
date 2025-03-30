


<td className="p-3 flex gap-4">
    <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full transition-all"><Edit size={18} /></button>
    <button className="text-red-500 hover:text-red-700 p-2 rounded-full transition-all"><Trash2 size={18} /></button>
</td>



import React from 'react';
import { Home, Package, Zap, Users, BarChart, Bell, Settings, Search, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bomber from '../assets/bomber.jpg';
import { motion } from "framer-motion";