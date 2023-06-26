import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <React.Fragment>
            <Header />
                <Outlet />
            <Footer />
        </React.Fragment>
    )
}
export default Layout;