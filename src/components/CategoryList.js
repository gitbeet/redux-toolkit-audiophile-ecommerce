import React from 'react'
import { useProductData } from '../context/ProductDataContext'
import CategoryItem from './CategoryItem'
import '../css/CategoryList.css'

export default function CategoryList({mobileMenu = false}) {

  const {productData} = useProductData()

  return (
    <div className='category-list'>
      {[...new Set(productData.map(product => product.category))].map(category => {
        return <CategoryItem  key={category}
                              category={category}
                              mobileMenu = {mobileMenu}/>
      })}    
    </div>
  )
}
