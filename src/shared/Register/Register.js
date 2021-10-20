import { getAuth, updateEmail, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../../assets/images/google-logo.png';
import LoginImg from '../../assets/images/login-img.png';
import useAuth from '../../hooks/useAuth';
const Register = () => {
    const [regError, setRegError] = useState('');
    const history = useHistory();
    const auth = getAuth();
    const location = useLocation();   
    const redirect_uri = location.state?.from || '/home';
    const {handleCreateUser,setUser, setError, error, handleGoogleSignIn,user } = useAuth();
    
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = data => {
        const {email, password, fullName} = data;
        handleRegisterUser(email, password, fullName);
        console.log(data);
    };
    
    
    const handleRegisterUser = (email, password, fullName) => {
        handleCreateUser(email, password)
        .then(result => {
            setUser(result.user)

            updateProfile(auth.currentUser, {
                displayName: fullName, email: email
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                setError(error.message);
                console.log(error);
                console.log(user)
                // ...
              });
            
            //   update email
            updateEmail(auth.currentUser, email).then(() => {
                // Email updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            
            history.push(redirect_uri
                )
        }).catch(error=>{
            setError(error.message)
        })
        if(fullName == null || user.displayName == null){
            setError("Please enter name");
            console.log(fullName);
            
            if(email == null) {
                setError("Please enter email");
                console.log(email);
                
                if(password == null){
                    setError("Please enter password");
                    console.log(password);
                    
                }
            }
        }

        
        
    }

    
    return (
        <div className="flex flex-col md:flex-row items-center w-11/12 mx-auto">
            {/* sign uo left start */}
            <div className="md:w-2/5 w-full form-design text-left">
            <div className="md:w-3/5 w-full mx-auto">
                <h2 className="text-3xl font-medium login-header">SIgn Up</h2>
                <p>Already have an account? <NavLink className="text-blue-900" to="/login">Sign In</NavLink></p>

                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="mb-2">
                        <div className="border border-1-blue p-1">
                            <i className="fas fa-user mr-5 ml-2 text-blue-900"></i>
                            <input placeholder="Enter name" className="outline-none" type="text" {...register("fullName", { required: true})} />
                            <p>{regError}</p>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="border border-1-blue p-1">
                            <i className="fas fa-envelope-open mr-5 ml-2 text-blue-900"></i>
                            <input placeholder="Enter email" className="outline-none" type="email" {...register("email", { required: true})}  />
                        </div>
                    </div>
                    <div>
                        <div className="border border-1-blue p-1">
                            <i className="fas fa-lock mr-5 ml-2 p-1 text-blue-900"></i>
                            <input className="outline-none" placeholder="Enter password" type="password" {...register("password", { required: true})} />
                        </div>
                    </div>
                    <input type="submit" value="Sign Up" className="block w-full font-medium py-1 my-2 px-12 bg-blue-900 text-white btn-hover"/>
                </form>
                <p className="text-center">--------- or ---------</p>
                    <div>
                        <div className="flex items-center justify-center border border-1-blue p-1 text-center cursor-pointer" onClick={handleGoogleSignIn}>
                        <img className="w-5 h-5 text-right" src={googleIcon} alt="" /> 
                        <p className=" text-left text-lg font-base ml-1.5">Sign In</p>
                    </div>
                </div>
            </div>
            </div>
            {/* sign up Right */}
            <div className="w-3/5 hidden md:block">
                <div className="w-3/5 mx-auto">
                    <img src={LoginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;