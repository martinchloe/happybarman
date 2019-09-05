import React from "react";
import axios from 'axios';




export default function Products() {



    axios.create({
        baseURL: "http://localhost:8080/products",
        responseType: "json"
      });
    
    return(
    <div>

        lala
        
    </div>);

}