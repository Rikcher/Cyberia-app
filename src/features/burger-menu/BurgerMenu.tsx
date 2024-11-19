import { StyledBurgerMenu } from "./BurgerMenu.styles";

const BurgerMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return <StyledBurgerMenu $isOpen={isOpen}>BurgerMenu</StyledBurgerMenu>;
};

export default BurgerMenu;
