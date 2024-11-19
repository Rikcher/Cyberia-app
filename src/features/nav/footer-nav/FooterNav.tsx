import { StyledFooterNav } from "./FooterNav.styles";
import { commonPages } from "../../../shared/utils/navigationData";
import Nav from "../../../shared/components/nav/Nav";

const FooterNav = () => {
    return (
        <StyledFooterNav>
            <Nav pages={commonPages}></Nav>
        </StyledFooterNav>
    );
};

export default FooterNav;
