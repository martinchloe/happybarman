import React, { useState } from "react";
import { AppProvider } from "./contexts/appcontext";

import Authentification from './components/authentification';
import User from './components/user';




function App() {

  const [user, setUser] = useState({ identifier: "", password: "", jwt: "", isLogged: false });



  // axios
  // .get('http://localhost:8080/', {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // })
  // .then(response => {
  //   // Handle success.
  //   console.log('Data: ', response.data);
  // })
  // .catch(error => {
  //   // Handle error.
  //   console.log('An error occurred:', error);
  // });


    return (
      <>
      <AppProvider 
      value={{
        user: user
      }}
      >
      {!user.isLogged && <Authentification setUser = {setUser} />}
      {user.isLogged && <User />}
      </AppProvider>
      </>
    )

}

export default App;
