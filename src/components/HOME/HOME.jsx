import { Outlet } from "react-router-dom";
import About from "../About/About";


const HOME = () => {
    return (
        <div>
        <About></About>
            <h2>This is home component</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default HOME;