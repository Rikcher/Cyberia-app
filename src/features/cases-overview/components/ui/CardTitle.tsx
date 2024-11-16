import StyledCardTitle from "../../styles/StyledCardTitle";
import CardTitleSvg from "./CardTitleSvg";

interface CardTitleProps {
    text: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ text }) => {
    return (
        <StyledCardTitle>
            {text}
            <CardTitleSvg />
        </StyledCardTitle>
    );
};

export default CardTitle;
