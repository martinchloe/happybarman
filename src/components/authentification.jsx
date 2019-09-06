import React, { useState } from "react";
import axios from 'axios';


export default function Authentification(props){
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");



    const handleIdentifier = event => {
        event.preventDefault();
        setIdentifier(event.currentTarget.value);
    }

    const handlePassword = event => {
        event.preventDefault();
        setPassword(event.currentTarget.value);
    }

    const handleConnexion = event => {
        event.preventDefault();
        processLogin();
    }
    
    const processLogin = (callback) => {
        axios
        .post('http://localhost:8080/auth/local', {
            identifier: identifier,
            password: password
        })
        .then(response => {
            // Handle success.
            // console.log('Well done!');
            // console.log('User profile', response.data.user);
            // console.log('User token', response.data.jwt);

                props.setUser({identifier: identifier, password: password, jwt: response.data.jwt, isLogged: true, role: response.data.user.role.id});
                console.log(response.data.jwt)  
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error);
            });
    }

    return(
        <div>
            <form>
                <fieldset>
                    <label>Username: </label><input type="text" name="identifier" onChange={handleIdentifier}/>
                </fieldset>
                <fieldset>
                    <label>Password: </label><input type="text" onChange={handlePassword}/>
                </fieldset>
                <button type="submit" onClick={handleConnexion}>Submit</button>
            </form>
        </div>
    );
}