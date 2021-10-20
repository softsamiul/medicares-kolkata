import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import authInitApp from "../shared/firebase/firebase.init";

authInitApp();
const useFirebase = () => {
    const auth = getAuth();
    const history = useHistory();
    // states
    const [user, setUser] = useState({});
    const [doctors, setDoctors] = useState([]);
    const [services, setServices] = useState([]);
    const [error, setError] = useState('');

    // create user for email pass regsiter
    const handleCreateUser = (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password);
        
    }

    // Update users profile
        

    // signin using email and password
    const signInUsingEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    // providers
    const googleProvider = new GoogleAuthProvider();

    // google sign in 
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
        
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

    // get current user by getauth

    // handling Log out 
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            history.push('/home');
            setUser({})
        }).catch((error) => {
            // An error happened.
            setError(error.message)
        });
    }

    // fetching doctors data
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res=>res.json())
        .then(data => setDoctors(data))
    },[])

    // fetching services data
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return {
        user,
        setUser,
        handleCreateUser,
        signInUsingEmailPass,
        handleGoogleSignIn,
        logOut,
        doctors,
        services,
        setServices,
        error,
        setError
    }
}

export default useFirebase;