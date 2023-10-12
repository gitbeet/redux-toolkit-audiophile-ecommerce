import React from 'react'
import CategoryList from './CategoryList'
import HomeHeader from './HomeHeader'
import ProductAdZX7 from './ProductAdZX7'
import ProductAdZX9 from './ProductAdZX9'
import ProductAdYX1 from './ProductAdYX1'
import '../css/Home.css'

export default function Home() {
  return (
    <>
    <HomeHeader/>
    <div className='container home-container'>
        <div className='home-category-list'>
          <CategoryList />
        </div>       
        <ProductAdZX9 />  
        <ProductAdZX7 />
        <ProductAdYX1 />
    </div>
    </>
  )
}
