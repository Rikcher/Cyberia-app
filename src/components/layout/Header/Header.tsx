import { StyledHeader, SwitchersWrapper } from "./Header.styles.ts";
import {
    Logo,
    HeaderNav,
    LanguageSwitch,
    ThemeSwitch,
} from "./Header.components";

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
