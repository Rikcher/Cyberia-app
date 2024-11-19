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

interface BurgerMenuProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {
    const { t } = useTranslation();

    return (
        <StyledBurgerMenu
            $isOpen={isOpen}
            className={isOpen ? "no-doc-scroll" : ""}
        >
            <StyledBurgerNav>
                <Nav pages={commonPages} onClick={() => setIsOpen(!isOpen)} />
            </StyledBurgerNav>
            <StyledLine />
            <StyledBurgerMenuHeader>{t("contacts")}:</StyledBurgerMenuHeader>
            <StyledBurgerMenuContactDetails />
            <StyledLine />
        </StyledBurgerMenu>
    );
};

export default BurgerMenu;
