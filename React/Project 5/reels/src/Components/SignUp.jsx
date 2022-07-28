import React from 'react'
import {auth,db} from '../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { collection, addDoc,doc,setDoc } from "firebase/firestore"; 



function SignUp(){
    let [email,setEmail] = React.useState("");
    let [password,setPassword] = React.useState("");
    let [fullName,setFullName] = React.useState("");

    // states needed to handle login
    let [loader,setLoader] = React.useState(false);
    let [user,setUser] = React.useState(null);
    let [error,setError] = React.useState("");

    const handleEmail = function(e){
        setEmail(e.target.value);
    }
    const handlePassword = function(e){
        setPassword(e.target.value);
    }
    const handleFullName = function(e){
        setFullName(e.target.value);
    }

    const signUp = async function(){
        setLoader(true);     // JAB TAK RESPONSE AATA HAI TAB TAK LOADING PRINT KAR DO
        try{
            let userCred = await createUserWithEmailAndPassword(auth,email,password);
            
            // add new user in the Users collection
            try {
                // Method 1: with random document Name
                // const docRef = await addDoc(collection(db, "users"), {
                //     email:  email,
                //     name: fullName,
                //     profilePicUrl: "",
                //     uid: userCred.user.uid,
                //     reelsIds : []
                // });
            
                // Method 2: with user defined name of the document
                await setDoc(doc(db, "users", userCred.user.uid), {
                    email:  email,
                    name: fullName,
                    profilePicUrl: "",
                    uid: userCred.user.uid,
                    reelsIds : []
                });
            } 
            catch (e) {
                console.error("Error adding document: ", e);
            }

            setUser(userCred.user);
        }
        catch(err){
            setError(err.message);
        }
        setLoader(false);
    }

    return(
        <div>
            {
                (loader == true)
                ?
                    <h1>Loading...</h1>
                :
                    (user != null)
                    ?
                        <div> 
                            <h3> User id is : {user.uid} </h3>
                        </div>
                    :   
                        (error !== "")
                        ?   
                            <div>Email/Password Incorrect <h3> {error} </h3></div>
                        :
                        <div className="flex py-14 px-64">
                                <img className="loginPage-img" src="https://metricool.com/wp-content/uploads/Dominant-Filter-Instagram-1-edited-scaled.jpg"></img>
                                <div  className=" flex flex-col justify-center   w-5/12 py-10 px-6">
                                    <div>
                                        <img className="pl-16" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"></img>
                                    </div>
                                    
                                    <div className="flex flex-col mt-16  h-1/2 items-center justify-evenly">
                                        <input className="border text-center border-black h-10 w-4/5" type="email" placeholder="Enter email..." value={email} onChange={handleEmail}/>
                                        <input className="border text-center border-black h-10 w-4/5" type="password" placeholder="Enter password..." value={password} onChange={handlePassword}/>
                                        <input className="border text-center border-black h-10 w-4/5" type="text" placeholder="Enter full name..." value={fullName} onChange={handleFullName}/>
                                        <input className="border text-center border-black h-10 w-4/5 py-1 px-1 text-center text-sm" type='file' placeholder="upload"/>
                                       
                                        
                                        <button className="bg-blue-500 hover:bg-blue-700 w-4/5 text-white font-bold py-2 px-4 rounded" onClick={signUp}>Sign Up</button>

                                    
                                    </div>

                                </div>
                            </div>
            
            }   
        </div>
    )
}

export default SignUp;
                            // <>
                            
                            // </>