import React, { useState } from "react";
import { AppProvider } from "./contexts/appcontext";

import Authentification from './components/authentification';
import User from './components/user';
import Admin from './components/admin';




function App() {

  const [user, setUser] = useState({ identifier: "hugo", password: "secret!", jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTY3Njg1OTg2LCJleHAiOjE1NzAyNzc5ODZ9.rmX1dcipGnf8AAjzL6_lnUDT4ZA8nVhxOHA_8M4bXS4", isLogged: true, role: 2 });
//jwt du client "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTY3Njg1OTg2LCJleHAiOjE1NzAyNzc5ODZ9.rmX1dcipGnf8AAjzL6_lnUDT4ZA8nVhxOHA_8M4bXS4"
//admin eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY3NzczMzE2LCJleHAiOjE1NzAzNjUzMTZ9.d_RfXuttAUMvRaGtoBi3QHbL3K2_qpoIB4Y4QtQmWSQ


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
        {user.isLogged && user.role === 2 ? <User /> :  !user.isLogged}
        {user.isLogged && user.role === 4 ? <Admin /> : !user.isLogged}
      </AppProvider>

      </>
    )

}

export default App;
