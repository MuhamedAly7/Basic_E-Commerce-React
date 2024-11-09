import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList(props)
{
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(api_url)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div className="container">
                <div className="row">
                    {products.map((product) => 
                        <div className="col-3 my-1">
                            <Product image={product.image} title={product.title} description={product.description} price={product.price}></Product>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
}

export default ProductsList;