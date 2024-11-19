import { BurgerButtonWrapper, BurgerSpan } from "./BurgerButton.styles";

interface BurgerButtonProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}
const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, setIsOpen }) => {
    return (
        <BurgerButtonWrapper onClick={() => setIsOpen(!isOpen)}>
            <BurgerSpan $isMenuOpen={isOpen} $index={0}></BurgerSpan>
            <BurgerSpan $isMenuOpen={isOpen} $index={1}></BurgerSpan>
            <BurgerSpan $isMenuOpen={isOpen} $index={2}></BurgerSpan>
        </BurgerButtonWrapper>
    );
};

export default BurgerButton;
