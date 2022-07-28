import React from 'react'
import './Styles/Profile.css'
import {AuthContext} from '../Context/AuthContext';
import {doc,getDoc} from 'firebase/firestore'
import {db} from '../firebase'


function Profile(){
    let userObj = React.useContext(AuthContext);
    let uid = userObj.cUser.uid;

    let [loader,setLoader] = React.useState(true);
    let [data,setData] = React.useState();        // Data to be receive from fireStore


    React.useEffect(function(){
        (async function getDetails(){
            const docRef = doc(db, "users", uid );
            const docSnap = await getDoc(docRef);
            let userDetails  = docSnap.data();
            setData(userDetails);
            setLoader(false);
        })();
        
    },[]);

    return(
        <>
        {
            (loader == true)
            ? <div>Loading...</div>
            :
            <div>
                <div className="navbar-feed">
                    <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"></img>
                    <div className="navigate">
                    <img className="icon-img" src="https://cdn5.vectorstock.com/i/thumb-large/99/94/default-avatar-placeholder-profile-icon-male-vector-23889994.jpg"></img>
                    <span className="icon material-icons">home</span>
                    <span className="icon material-icons">logout</span>
                    </div>
                </div>
                <div className="flex items-center justify-around py-28">
                     <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"></img>
                    <div className = " h-2/3 w-2/3">
                        <div className="border leading-7">
                            <div className="">Name :        <span className="text-lg font-bold">{data.name}</span></div>
                            <div className="">Posts :       <span className="text-lg font-bold">{data.reelsIds.length}</span></div>
                            <div className="">Email :       <span className="text-lg font-bold">{data.email}</span></div>
                            <div className="">User Id :     <span className="text-lg font-bold">{uid}</span></div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        }
        </>
        
        )
    }
    
    export default Profile;
    