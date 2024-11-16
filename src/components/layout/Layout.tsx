import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import StyledLayout from "./styles/StyledLayout";
import StyledMain from "./styles/StyledMain";
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
