import { Link, NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    
    return (
        <div>
            <nav className="nav">
                <Link to="/about">About</Link>
                <NavLink to="/users">Users</NavLink>
                
                <Link to="/posts">Posts</Link>
                <Link to="/comments">Comments</Link>
            </nav>
        </div>
    );
};

export default Header;