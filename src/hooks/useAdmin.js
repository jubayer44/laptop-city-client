import { useEffect, useState } from "react";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=> {
        if(email){
            fetch(`${process.env.REACT_APP_URL}/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);
                setIsLoading(false);
            })
        }
    }, [email]);
    return [isAdmin, isLoading]
};
export default useAdmin;