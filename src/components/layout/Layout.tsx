import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { StyledLayout, StyledMain } from "./Layout.styles";
import Breadcrumbs from "../../shared/components/breadcrumbs/Breadcrumbs";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <StyledLayout>
            <Header />
            <StyledMain>
                <Breadcrumbs />
                <Outlet />
            </StyledMain>
            <Footer />
        </StyledLayout>
    );
};

export default Layout;
