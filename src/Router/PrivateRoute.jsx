import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <h1>Loading....</h1>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={location?.pathname} to={'/signin'}></Navigate>
    );
   
};

export default PrivateRoute;