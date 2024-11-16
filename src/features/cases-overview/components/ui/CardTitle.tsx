import StyledCardTitle from "../../styles/StyledCardTitle";
import StyledCardTitleSvg from "../../styles/StyledCardTitleSvg";

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
