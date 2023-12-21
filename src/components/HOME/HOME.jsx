import { Outlet } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const HOME = () => {
    return (
        <div>
        <Header></Header>
            <About></About>
            <h2>This is home component</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HOME;