import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import authInitApp from "../shared/firebase/firebase.init";

authInitApp();
const useFirebase = () => {
    const auth = getAuth();
    const history = useHistory();
    // states
    const [isLoading, setIsloading] = useState(true);
    const [user, setUser] = useState({});
    const [doctors, setDoctors] = useState([]);
    const [services, setServices] = useState([]);
    const [error, setError] = useState('');

    // create user for email pass regsiter
    const handleCreateUser = (email, password) => {
        setIsloading(true)
        return createUserWithEmailAndPassword (auth, email, password);
        
    }
        
    // signin using email and password
    const signInUsingEmailPass = (email, password) => {
        setIsloading(true)
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    // providers
    const googleProvider = new GoogleAuthProvider();

    // google sign in 
    const handleGoogleSignIn = () => {
        setIsloading(true)
        return signInWithPopup(auth, googleProvider);
    }
    // get curent user
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsloading(false);
        });
        return () => unsubscribed;
    },[])

    // get current user by getauth

    // handling Log out 
    const logOut = () => {
        setIsloading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            history.push('/home');
            setUser({})
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsloading(false))
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
        updateEmail,
        auth,
        error,
        isLoading,
        setIsloading,
        setError
    }
}

export default useFirebase;