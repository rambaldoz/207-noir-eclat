import React from "react";
import Icon from "./Icon";

export default function Brands({ brand }) {
    return (
        <span >
            <img src={brand.image} alt={brand.name} />
        </span>
    );
}