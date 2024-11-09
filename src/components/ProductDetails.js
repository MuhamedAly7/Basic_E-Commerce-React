import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails()
{
    // Hook function to get url parameters
    const params = useParams();
    const [product, setProduct] = useState({});

    const api_url = `https://fakestoreapi.com/products/${params.productId}`;

    useEffect(() => {
        fetch(api_url)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, []);

    return (
        <>
            <h2>Title: {product.title}</h2>
            <img src={product.image} alt="..." height={500}/>
            <p><strong>Description</strong><br/>{product.description}</p>
            <h3><strong>Category: </strong>{product.category}</h3>
            <h4><strong>Price: </strong>{product.price}$</h4>
        </>
    );
}

export default ProductDetails;