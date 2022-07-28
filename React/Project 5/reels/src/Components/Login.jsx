import React from 'react'
import {auth} from '../firebase'
import {signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth';


function Login(){
    let [email,setEmail] = React.useState("");
    let [password,setPassword] = React.useState("");

    // states needed to handle login
    let [loader,setLoader] = React.useState(false);
    let [user,setUser] = React.useState(null);
    let [error,setError] = React.useState("");

    React.useEffect(function(){
        // This function calls itself, whenever login and signout changes
        let unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              console.log("USER IS SIGNED IN...")
              console.log(user)
              setUser(user);
            }
            else {
              // User is signed out
              console.log("NOT SIGNED IN...")
              setUser(null);              
            }
            setLoader(false);
          });
        return unsubscribe;
    },[]); // PAGE RELOAD HONE PAR EK HI BAR CHALEGA

    const handleEmailChange = function(e){
        setEmail(e.target.value);
    }

    const handlePasswordChange = function(e){
        setPassword(e.target.value);
    }
    
    const handleLogin = async function(){
        setLoader(true);     // JAB TAK RESPONSE AATA HAI TAB TAK LOADING PRINT KAR DO
        try{
            let userCred = await signInWithEmailAndPassword(auth,email,password);
            console.log(userCred);
            console.log(userCred.user);
            setUser(userCred.user);
        }
        catch(err){
            setError(err.message);
        }
        setLoader(false);
    }

    const handleSignOut = async function(){
        await signOut(auth);
        setUser(null); 
        setEmail("");
        setPassword("");
    } // but actually it doesn't logged out from cookies


   

    return(
        <div>
            {   
                (error != "")
                ?   <h1 className="font-bold">Email/Password Incorrect <br></br>{error} </h1>
                :   (loader == true) 
                    ?   <h1 className="font-bold" >Loading...</h1>
                    :   <div className="flex py-14 px-64">
                                <img className="loginPage-img" src="https://metricool.com/wp-content/uploads/Dominant-Filter-Instagram-1-edited-scaled.jpg"></img>
                                <div  className=" flex flex-col justify-center   w-5/12 py-10 px-6">
                                    <div>
                                        <img className="pl-16" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"></img>
                                    </div>
                                    
                                    <div className="flex flex-col mt-16 h-36 items-center justify-evenly">
                                        <input placeholder="Email" className="border text-center border-black h-10 w-4/5" type="email" value={email} onChange={handleEmailChange}/>
                                        <input Placeholder="Password" className="border text-center border-black h-10 w-4/5" type="password" value={password} onChange={handlePasswordChange} />
                                        <button className="bg-blue-500 hover:bg-blue-700 w-4/5 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>Log in</button>
                                    </div>

                                </div>
                            </div>
            }
            
        </div>
    )
}

export default Login;


                                