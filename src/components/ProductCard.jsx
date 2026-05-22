import React from "react";
import Icon from "./Icon";

export default function ProductCard({ product }) {
    return (
        <article className="product-card">
        <div className="product-image">
            <img src={product.image} alt="" loading="lazy" />
        </div>
        <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href="#contact">
            View Details <Icon name="arrow" />
            </a>
        </div>
        </article>
    );
}