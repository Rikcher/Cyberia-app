import StyledCardTitle from "./StyledCardTitle";
import StyledCardTitleSvg from "./StyledCardTitleSvg";

interface CardTitleProps {
    text: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ text }) => {
    return (
        <StyledCardTitle>
            {text}
            <StyledCardTitleSvg />
        </StyledCardTitle>
    );
};

export default CardTitle;
