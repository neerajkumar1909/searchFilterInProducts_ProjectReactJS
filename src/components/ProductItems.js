import React from "react";

function ProductItems({ product }) {
    const { id, title, thumbnail, description, price } = product
    return (
        <div className="products-items" key={id}>
            <img src={thumbnail} alt={title} />
            <h3>{price}</h3>
            <h2>{description}</h2>
        </div>
    )
}
export default ProductItems