import { Link } from "react-router-dom";
import './navBar.css'

const NavBar = () => { 
   return (
    <div className="Container_Nav">
       <nav className="Container_Idems">
            <Link to={'/home'}>Home</Link>
            <Link to={'/create'}>CrearVideoGame</Link>
          
       </nav> 
    </div> 
   ) 
}

export default NavBar;