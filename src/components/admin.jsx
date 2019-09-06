import React, {useEffect, useState, useContext } from "react";
import AppContext, { AppConsumer } from "../contexts/appcontext";
import CreateUser from "./createuser"





export default function Admin() {

    const { user } = useContext(AppContext);
   
    return(
    <div>
        Hello admin
        <CreateUser />
    </div>);

}