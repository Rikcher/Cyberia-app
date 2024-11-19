import {
    StyledBurgerMenu,
    StyledBurgerNav,
    StyledLine,
    StyledBurgerMenuHeader,
    StyledBurgerMenuContactDetails,
} from "./BurgerMenu.styles";
import Nav from "../../shared/components/nav/Nav";
import { commonPages } from "../../shared/utils/navigationData";
import { useTranslation } from "react-i18next";

const BurgerMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    const { t } = useTranslation();

    return (
        <StyledBurgerMenu
            $isOpen={isOpen}
            className={isOpen ? "no-doc-scroll" : ""}
        >
            <StyledBurgerNav>
                <Nav pages={commonPages} />
            </StyledBurgerNav>
            <StyledLine />
            <StyledBurgerMenuHeader>{t("contacts")}:</StyledBurgerMenuHeader>
            <StyledBurgerMenuContactDetails />
            <StyledLine />
        </StyledBurgerMenu>
    );
};

export default BurgerMenu;
