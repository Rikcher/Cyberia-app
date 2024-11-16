import StyledHeader from "./styles/StyledHeader";
import Logo from "../ui/Logo";
import HeaderNav from "../../features/nav/components/HeaderNav";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Logo width={8.125} />
            <HeaderNav />
            <p style={{ color: "white" }}>EN/RU</p>
        </StyledHeader>
    );
};

export default Header;
