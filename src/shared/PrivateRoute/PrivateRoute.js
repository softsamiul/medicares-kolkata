import React from 'react';
import { Redirect, Route } from 'react-router';
import preloader from "../../assets/images/preloader.gif";
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <img src={preloader} alt="" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email || user.displayName ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;