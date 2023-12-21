import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;