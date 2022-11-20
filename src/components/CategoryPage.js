import React, { useDebugValue, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductData } from '../context/ProductDataContext'
import ProductCard from './ProductCard'
import CategoryList from './CategoryList'
import '../css/CategoryPage.css'

export default function CategoryPage() {

  const {categoryName} = useParams()
  const {productData} = useProductData()

  const categoryItems = productData.filter(product => product.category === categoryName)
 
  useEffect(() => {
    window.scrollTo(0, 0)
  },[categoryItems])

  
  if(!productData) return <h1>Loading ...</h1>
  if(categoryItems.length === 0) return <h1>No such category!</h1>
  return (
    <div className='category-page'>
      <div className='category-page-header'>
        <h1>{categoryName}</h1>
      </div>
      <div className='product-card-list'>
        {categoryItems.sort(function(a,b){return a.new < b.new }).map((product,index) => {
            return  <ProductCard  key={product.id}
                                  product={product}
                                  arrangement={index%2 === 0 ? 'imageLeft' : 'imageRight'}/>
        })}
      </div>
      <div className='container'>
        <CategoryList />
      </div>
    </div>
  )
}
