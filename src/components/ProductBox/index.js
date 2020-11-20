import React from 'react'
import ProductBoxBody from './components/ProductBoxBody'
import ProductBoxImg from './components/ProductBoxImg'

const ProductBox = () => {
  return (    
    <article>
      <div>
        <ProductBoxImg />    
        <ProductBoxBody />
      </div>
    </article>
  )
}

export default ProductBox;