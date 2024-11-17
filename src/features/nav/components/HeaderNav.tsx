import StyledHeaderNav from "../styles/StyledHeaderNav";
import Nav from "./Nav";
import { commonPages } from "../../../shared/utils/navigationData";

const HeaderNav = () => {
    return (
        <StyledHeaderNav>
            <Nav pages={commonPages} />
        </StyledHeaderNav>
    );
};

export default HeaderNav;
