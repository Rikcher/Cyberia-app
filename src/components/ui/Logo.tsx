import React from "react";
import logo from "/src/assets/Logo.svg";
import { Link } from "react-router-dom";

interface LogoProps {
    width: number;
}

const Logo: React.FC<LogoProps> = ({ width }) => {
    return (
        <Link to="/">
            <img style={{ width: `${width}rem` }} src={logo} alt="Logo" />
        </Link>
    );
};

export default Logo;
