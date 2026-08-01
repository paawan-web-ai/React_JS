import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../api/ProductApi'
export const ProductDataContext = createContext()

const ProductContext = (props) => {


    const [productData, setproductData] = useState([])


    const setData = async () => {
        const data = await getData()
        setproductData(data)
        // setproductData(await getData())
    }


    useEffect(() => {
        setData()
    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await getData()
    //         setproductData(data)
    //     }
    //     fetchData()
    // }, [])



    return (
        <div>
            <ProductDataContext.Provider value={productData}>
                {props.children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext
