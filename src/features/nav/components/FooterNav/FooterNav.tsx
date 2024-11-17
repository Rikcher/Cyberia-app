import StyledFooterNav from "./StyledFooterNav";
import Nav from "../Nav";
import { commonPages } from "../../../../shared/utils/navigationData";

const FooterNav = () => {
    return (
        <StyledFooterNav>
            <Nav pages={commonPages} />
        </StyledFooterNav>
    );
};

export default FooterNav;