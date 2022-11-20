import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProductData } from '../context/ProductDataContext'
import { useImportImage } from '../hooks/useImportImage'
import ButtonArrow from './ButtonArrow'
import '../css/CategoryItem.css'

export default function CategoryItem({category , mobileMenu}) {

    const [loading,error,image] = useImportImage(category)

    const {productData} = useProductData()

    if(loading) return <h4>Loading {category} image...</h4>
    if(error) return <h4>Error while loading the {category} image</h4>
    return (
        <div className='category-item'>
        <div className='category-item-foreground'>
            <img className='category-item-image image-border' src={image} alt={category} />
            <h6 className='category-item-name'>{category}</h6>
            <Link to={`/${category}`}>
                <p>
                    <ButtonArrow text={'shop'} mobileMenu={mobileMenu}/>
                </p>
            </Link>
        </div>
       <div className='category-item-background'></div>
        </div>
    )
}
