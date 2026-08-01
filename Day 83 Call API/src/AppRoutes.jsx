import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Products />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
        </Routes>
    )
}

export default AppRoutes
