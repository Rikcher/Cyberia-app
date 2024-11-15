import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import StyledLayout from "./styles/StyledLayout";
import StyledMain from "./styles/StyledMain";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <StyledLayout>
            <Header />
            <StyledMain>
                <Outlet />
            </StyledMain>
            <Footer />
        </StyledLayout>
    );
};

export default Layout;
