import React, {useEffect, useState, useContext } from "react";
import AppContext, { AppConsumer } from "../contexts/appcontext";
import axios from 'axios';

export default function CreateUser() {
    const { user } = useContext(AppContext);

    const [newUser, setNewUser] = useState({});
    const [userName, setUserName] = useState("");


    useEffect(() => {
        axios
        .post('http://localhost:8080/users', {
            headers: {Authorization: `Bearer ${user.jwt}`}
        })
        .then(response => {

            
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error);
            });
        }, [])

        const handleSaveUserName = event => {
            event.preventDefault();
            setUserName(event.target.value)
        }

    return(<form>
        <fieldset>
            <label onChange={handleSaveUserName}>Nom d'utilisateur:</label>
            <input type="text"/>
        </fieldset>
        <fieldset>
            <label>Adresse email:</label>
            <input type="text"/>
        </fieldset>
        <fieldset>
            <label>Mot de passe:</label>
            <input type="text"/>
        </fieldset>
        <button>Valider</button>

        
    </form>);
}