import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const ProductData = useContext(ProductDataContext)
    // console.log(ProductData)

    //params use to find id
    // const param = useParams()
    // console.log(param.id)

    const { productId } = useParams()

    const selectedProduct = ProductData.find((elem) => elem.id == productId)
    // console.log(selectedProduct)

    if (!selectedProduct) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div className='items'>
                <img src={selectedProduct.image} alt="" />
                <h2>{selectedProduct.title}</h2>
            </div>
        </div>
    )
}

export default ProductDetails
