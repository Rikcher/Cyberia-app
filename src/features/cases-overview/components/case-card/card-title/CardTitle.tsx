import { StyledCardTitle, StyledCardTitleSvg } from "./CardTitle.styles";

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
