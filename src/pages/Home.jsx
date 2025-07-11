import Navbar from "../components/home/Navbar";
import { useAuth } from "../context/AuthContext";

function Home(){
    const {user, logout } = useAuth();
    
    return(
        <>
            <div className="flex h-screen w-full">
                <Navbar logout={logout} />
                
            </div>
        </>
    );
}

export default Home;

//removido de linea 11 <h1 className="text-3xl font-bold mb-4">Bienvenido, {user.name}</h1>