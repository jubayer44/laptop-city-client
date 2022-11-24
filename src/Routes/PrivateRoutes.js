import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner/>
    };

    if(user && user?.uid){
        return children;
    };

    return (
        <Navigate to='/login' state={{from: location}} replace>
            
        </Navigate>
    );
};

export default PrivateRoutes;