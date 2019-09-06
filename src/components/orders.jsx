import React, {useEffect, useState, useContext } from "react";
import AppContext, { AppConsumer } from "../contexts/appcontext";
import axios from 'axios';





export default function Orders(props) {

    const { user } = useContext(AppContext);

    const [order, setOrder] = useState([]);
    const [price, setPrice] = useState("0");
    
    //const [product, setProduct] = useState([]);
    //const [quantity, setQuantity] = useState([])
    const products = props.products;

    useEffect(() => {
        /*
        axios
        .post('http://localhost:8080/orders', {
            headers: {Authorization: `Bearer ${user.jwt}`}
        })
        .then(response => {
            
        
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error);
            });
        */
        }, []);


        const handleAddOrder = (product) => {
            const temporder = [...order];
            // on recherche l'index de la bière à ajouter dans les commandes
            const existingindex = temporder.findIndex(order_item => order_item.id === product.id);
            // Si la biere a déja été commandée
            if (existingindex > -1) {
            // on incrémente la quantité
              temporder[existingindex].quantity++;
            } else {
            // Si la bière n'a pas déjà été ajoutée au commandes...
            // On la rajoute !    
              temporder.push({ id: product.id, product: product.beer_name, quantity: 1 });
            }
            // On remonte le nouveau state des commandes
            setOrder(temporder);
            
          };

        const handleRemoveOrder = item => {
            const temporder = [...order];
            const existingindex = temporder.findIndex(order_item => order_item.id === item.id);
            if (existingindex === -1) return;
            if (temporder[existingindex].quantity > 1) {
              temporder[existingindex].quantity--;
            } else {
            // Supprime la commande de temporder sur une longueur de 1 si existingindex est inférieur à 1
              temporder.splice(existingindex, 1);
            }
            setOrder(temporder);
        };


        const handleShowQuantity = (product) => {
            const element = order.find((o)=>o.id===product.id);
            return ((element && element.quantity) || 0)
        }

    return(
        <div>
            <table>
                {products.map(product =>
                    <tr key={product.id}>
                        <td>{product.beer_name}</td>
                        <td>{product.prix}</td>
                        {/* <td>{product.categorie.nom}</td> */}
                        <td><button onClick={(event) => {
                            event.preventDefault();
                            handleAddOrder(product);
                        }}>+</button></td>
                        <td><button onClick={(event) => {
                            event.preventDefault();
                            handleRemoveOrder(product);
                        }}>-</button></td>
                        <td>{handleShowQuantity(product)}</td>
                        {/* <td>Afficher le prix</td> */}
                    </tr>
                )}
                <ul>{order.map(o => <li>{o.quantity} {o.product}</li>)}</ul>
    

                <button>Commander</button>
            </table>
        </div>
        )

}