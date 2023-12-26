import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;