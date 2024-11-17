import React from "react";
import { Link } from "react-router-dom";
import StyledLogo from "./StyledLogo";

interface LogoProps {
    width: number;
}

const Logo: React.FC<LogoProps> = ({ width }) => {
    return (
        <Link to="/">
            <StyledLogo $width={width}></StyledLogo>
        </Link>
    );
};

export default Logo;
