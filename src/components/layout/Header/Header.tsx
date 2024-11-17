import { StyledHeader, SwitchersWrapper } from "./Header.styles.ts";
import Logo from "../../../shared/components/ui/Logo/Logo";
import HeaderNav from "../../../features/nav/components/HeaderNav/HeaderNav";
import LanguageSwitch from "../../../features/language-switch/LanguageSwitch";
import ThemeSwitch from "../../../features/theme-switch/ThemeSwitch";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Logo width={8.125} />
            <HeaderNav />
            <SwitchersWrapper>
                <ThemeSwitch />
                <LanguageSwitch />
            </SwitchersWrapper>
        </StyledHeader>
    );
};

export default Header;
