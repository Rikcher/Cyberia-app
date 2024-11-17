import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { StyledLayout, StyledMain } from "./Layout.styles";
import BreadcrumbsDisplay from "../../features/breadcrumbs/components/BreadcrumbsDisplay";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <StyledLayout>
            <Header />
            <StyledMain>
                <BreadcrumbsDisplay />
                <Outlet />
            </StyledMain>
            <Footer />
        </StyledLayout>
    );
};

export default Layout;
