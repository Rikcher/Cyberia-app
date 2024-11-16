import StyledFooterNav from "../styles/StyledFooterNav";
import Nav from "./Nav";
import { commonPages } from "../../../shared/navigationData";

const FooterNav = () => {
    return (
        <StyledFooterNav>
            <Nav pages={commonPages} />
        </StyledFooterNav>
    );
};

export default FooterNav;
