import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList()
{
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetch(api_url)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }

    const getCategories = () => {
        fetch(`${api_url}/categories`)
        .then((response) => response.json())
        .then((data) => setCategories(data));
    }

    const getProductsInCategory = (catName) => {
        fetch(`${api_url}/category/${catName}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }

    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div className="container">
                <button className="btn btn-info mx-1" onClick={() => getProducts()}>All</button>
                {
                    categories.map((category) => {
                        return (
                            <button key={category} onClick={() => {
                                getProductsInCategory(category);
                            }} className="btn btn-info mx-1">{category}</button>
                        );
                    })
                }
                <div className="row">
                    {products.map((product) => 
                        <div className="col-3 my-1" key={product.id}>
                            <Product id={product.id} image={product.image} title={product.title} description={product.description} price={product.price} showButton={true}></Product>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
}

export default ProductsList;