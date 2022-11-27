import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(loading || isLoading){
        return <Spinner/>
    };

    if(user && user?.uid && isAdmin){
        return children;
    };

    return (
        <Navigate to='/login' state={{from: location}} replace>
            
        </Navigate>
    );
};

export default AdminRoutes;