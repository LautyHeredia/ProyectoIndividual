import { Link } from "react-router-dom";
import './navBar.css'
import NavBarSearch from './NavBarSearch'

const NavBar = () => { 
   return (
    <div className="Container_Nav">
       <nav className="Container_Idems">
            <NavBarSearch/>
            <Link to={'/home'}>Home</Link>
            <Link to={'/create'}>CrearVideoGame</Link>
          
       </nav> 
    </div> 
   ) 
}

export default NavBar;