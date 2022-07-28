import React from 'react';
import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';

export const AuthContext = React.createContext();

function AuthContextProvider({children}){
    let [mainLoader,setMainLoader] = React.useState(true);
    let [cUser, setCurrentUser] = React.useState(null);     //   CURRENT USER

    React.useEffect(function(){
        // This function calls itself, whenever login and signout changes
        let unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              console.log("USER IS SIGNED IN...")
              console.log(user)
              setCurrentUser(user);
            }
            else {
              // User is signed out
              console.log("NOT SIGNED IN...")
              setCurrentUser(null);              
            }
            setMainLoader(false);
          });

        return unsubscribe;   // whenever this component will destroy, unsubscribe
                              // will remove the event listener (onAuthStateChanged)
    },[]); // PAGE RELOAD HONE PAR EK HI BAR CHALEGA

    let value={cUser};
    return(
        <AuthContext.Provider value={value}>
          {mainLoader == false && children} 
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;





