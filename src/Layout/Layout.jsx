import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";
import NavBar from "../Page/Shared/NavBar/NavBar";


const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;