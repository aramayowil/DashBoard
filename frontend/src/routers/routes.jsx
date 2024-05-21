import React from "react";
import { Routes, Route } from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
import Venta from "../pages/Venta";
import Stock from "../pages/Stock";
import Cambios from "../pages/Cambios";
import Productos from "../pages/Productos";

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sale" element={<Venta />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/change" element={<Cambios />} />
            <Route path="/admin-product" element={<Productos />} />
        </Routes>

    )
}

export default MyRoutes