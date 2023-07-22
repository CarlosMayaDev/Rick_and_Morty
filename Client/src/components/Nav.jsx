import SearchBar from '../components/SearchBar.jsx';
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {

    const navigate = useNavigate();

    const handleLogOut = () => {
      props.logOut(); // Llama a la función logOut pasada como prop desde el componente App
      navigate('/'); // Navega a la página de inicio ("/")
    };

    return(
        <div className="nav-container">
            <SearchBar onSearch={props.onSearch} />             
                <NavLink to="/about" className="nav-link">
                    <button className="nav-button">ABOUT</button>
                </NavLink>

                <NavLink to="/home" className="nav-link">
                    <button className="nav-button">HOME</button>
                </NavLink>
            
                <NavLink to="/favorites" className="nav-link">
                    <button className="nav-button">FAVORITES</button>
                </NavLink>

            <button onClick={handleLogOut} className="nav-button">LOGOUT</button> 

        </div>
    );
}

export default Nav;