import {Navigate} from 'react-router-dom';
import  AuthContext  from '../context/AuthContext';
import {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';


const UserProtectedRoute = ({children}) => {
    // const navigate = useNavigate();
    const {user, logoutUser, authTokens} = useContext(AuthContext);

    useEffect(() => {
        if (user) {
        const decodedToken = jwtDecode(authTokens);
        const currentTime = Math.floor(Date.now() / 1000);
        const tokenExpiresIn = decodedToken.exp - currentTime;
        if (tokenExpiresIn < 120)
            logoutUser();
    }
        
    }, [authTokens])
    
    // if (!user) return <Navigate to='/auth/login/' />
    if (!user)
        // logoutUser();
        return <Navigate to='/auth/login/' />
    return children;
}

export default UserProtectedRoute;
