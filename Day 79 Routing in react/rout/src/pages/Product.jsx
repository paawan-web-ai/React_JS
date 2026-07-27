import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div className='m-5'>
        <h1 className='text-3xl font-bold  underline mb-5'>Products Page
      </h1>

       <div className='flex gap-5'>
      <Link to='/product/men'>Men's Collection</Link>
      <Link to='/product/women'>Women's Collection</Link>
       </div>
    </div>
  )
}

export default Product
