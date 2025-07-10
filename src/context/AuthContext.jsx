import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        if (storedUser){ 
            setUser(JSON.parse(storedUser));
            navigate("/");
        }
    }, []);

    const login = (email, password) => {
        if (email === "admin@gmail.com" && password === "123")
            {
               const loggedUser = { name: "Admin", email };
                setUser(loggedUser);
                localStorage.setItem("user", JSON.stringify(loggedUser));
                navigate("/home");
            } else {
                alert("Credenciales Incorrectas")
            }
        }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/");
        }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )


    }

export const useAuth = () => useContext(AuthContext);

