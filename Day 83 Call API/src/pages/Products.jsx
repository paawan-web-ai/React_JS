import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

    const productData = useContext(ProductDataContext)

    if (!productData.length) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div className='main-product'>
                {productData.map((val, idx) => {
                    return <Link className='product' key={idx} to={`/product/${val.id}`}>
                        <div className='items'>
                            <img src={val.image} alt="" />
                            <h2>{val.title}</h2>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Products
