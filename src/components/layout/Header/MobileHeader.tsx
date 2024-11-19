import { StyledMobileHeader } from "./Header.styles.ts";
import { Logo } from "./Header.components";
import BurgerButton from "../../../shared/components/ui/burger-button/BurgerButton.tsx";
import { useState } from "react";
import BurgerMenu from "../../../features/burger-menu/BurgerMenu.tsx";

const MobileHeader: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledMobileHeader>
            <Logo width={8.125} />
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </StyledMobileHeader>
    );
};

export default MobileHeader;
