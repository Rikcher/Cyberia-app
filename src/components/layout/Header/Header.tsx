import StyledHeader from "./StyledHeader";
import Logo from "../../../shared/components/ui/Logo/Logo";
import HeaderNav from "../../../features/nav/components/HeaderNav/HeaderNav";
import LanguageSwitch from "../../../features/language-switch/LanguageSwitch";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Logo width={8.125} />
            <HeaderNav />
            <LanguageSwitch />
        </StyledHeader>
    );
};

export default Header;
