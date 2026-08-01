import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AppRoutes from './AppRoutes'

const App = () => {

  const [productData, setproductData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      return response.data
    }
    catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      const data = await getData()
      setproductData(data)
    }
    fetchData()
  }, [])




  // const getFirstData = async (id) => {
  //   try {
  //     const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
  //     console.log(response.data)
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <div>
      {/* <button
        onClick={getData}
      >allProducts</button>
      <button
        onClick={() => {
          getFirstData(4)
        }}
      >firstProduct</button> */}

      {/* <div className='main-product'>
        {productData.map((val, idx) => {
          return <div className='product' key={idx}>
            <div className='items'>
              <img src={val.image} alt="" />
              <h2>{val.title}</h2>
            </div>
          </div>
        })}
      </div> */}

      <AppRoutes />
    </div>
  )
}

export default App
