import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const authInitApp = () => {
    initializeApp(firebaseConfig);
}

export default authInitApp;