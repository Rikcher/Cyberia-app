import { StyledCardTitle, StyledCardTitleSvg } from "./CardTitle.styles";

interface CardTitleProps {
    text: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ text }) => {
    return (
        <StyledCardTitle>
            <h3>{text}</h3>
            <StyledCardTitleSvg />
        </StyledCardTitle>
    );
};

export default CardTitle;
