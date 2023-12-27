import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;