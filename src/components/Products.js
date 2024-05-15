import React from 'react'
import ProductItems from './ProductItems'

function Products({ products }) {
    if (!products.length) {
        return <h2 className='product-not-found'>Product Not Found</h2>
    }
    return (
        <div className='products'>
            {products && products.length > 0 ? products.map((product) => <ProductItems product={product} />) : null}
        </div>
    )
}

export default Products
