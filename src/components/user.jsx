import React, { useContext, useEffect } from "react";
import axios from 'axios';
import AppContext, { AppConsumer } from "../contexts/appcontext";
import Products from "./products";



export default function User() {
    const { user } = useContext(AppContext);
   
    return(
    <div>
        Welcome {user.identifier} !
        <Products/>
    </div>);

}