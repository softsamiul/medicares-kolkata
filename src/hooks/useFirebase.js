import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authInitApp from "../shared/firebase/firebase.init";

authInitApp();

const useFirebase = () => {
    const auth = getAuth();

    // states
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // providers
    const googleProvider = new GoogleAuthProvider();

    // google sign in 
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
            console.log(user);
        }).catch(error => {
            setError(error.message)
            console.log(error);
            
        })
    }

    // get curent user
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else{ 
                setUser({})    
            }
        })
    },[])

    // handling Log out 
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
        }).catch((error) => {
            // An error happened.
            setError(error.message)
        });
    }
    return {
        user,
        handleGoogleSignIn,
        logOut,
        error
    }
}

export default useFirebase;