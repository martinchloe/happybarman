import React, {useEffect, useState, useContext } from "react";
import AppContext, { AppConsumer } from "../contexts/appcontext";
import axios from 'axios';
import Orders from "./orders";





export default function Products(props) {

    const { user } = useContext(AppContext);

    const [products, setProducts] = useState([{name: "", categorie: "", price: "", qtt_in_stock: ""}])


    useEffect(() => {
        axios
        .get('http://localhost:8080/products', {
            headers: {Authorization: `Bearer ${user.jwt}`}
        })
        .then(response => {
            setProducts(response.data)            
            })
            .catch(error => {
                console.log('An error occurred:', error);
            });
        }, [])


    return(
    <div>
        <ul>
            {products.map(product => (
                <li key={product.id}>{product.beer_name}, {product.prix} € </li>
            ))}
        </ul>
        <Orders 
        products = {products}
        setProducts = {setProducts}
        />

    </div>);

}