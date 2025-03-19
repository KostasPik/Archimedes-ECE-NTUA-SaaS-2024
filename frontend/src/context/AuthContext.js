import { createContext , useState} from 'react'
import { jwtDecode } from "jwt-decode";


const AuthContext = createContext();


export const AuthProvider = ({children}) => {    

    const [authTokens, setAuthTokens] = useState( () => localStorage.getItem('authTokens') ? localStorage.getItem('authTokens') : null);
    const [user, setUser] = useState( () => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null);

    const saveTokens = (tokens) => {
        localStorage.setItem('authTokens', tokens);
        setAuthTokens(tokens)
        setUser(jwtDecode(tokens));
    }

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        window.location.href = '/auth/login';
    }


    const contextData = {
        authTokens: authTokens,
        user: user,
        logoutUser: logoutUser,
        saveTokens: saveTokens,
    }

    return (
        <AuthContext.Provider  value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

