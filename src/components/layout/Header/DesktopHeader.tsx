import { StyledDesktopHeader, SwitchersWrapper } from "./Header.styles.ts";
import {
    Logo,
    HeaderNav,
    LanguageSwitch,
    ThemeSwitch,
} from "./Header.components";

const DesktopHeader: React.FC = () => {
    return (
        <StyledDesktopHeader>
            <Logo width={8.125} />
            <HeaderNav />
            <SwitchersWrapper>
                <ThemeSwitch />
                <LanguageSwitch />
            </SwitchersWrapper>
        </StyledDesktopHeader>
    );
};

export default DesktopHeader;
