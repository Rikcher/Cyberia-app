import { StyledHeaderNav } from "./HeaderNav.styles";
import Nav from "../../shared/components/nav/Nav";
import { commonPages } from "../../shared/utils/navigationData";

const HeaderNav = () => {
    return (
        <StyledHeaderNav>
            <Nav pages={commonPages} />
        </StyledHeaderNav>
    );
};

export default HeaderNav;
