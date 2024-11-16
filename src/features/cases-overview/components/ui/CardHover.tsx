import StyledCardHover from "../../styles/StyledCardHover";

interface CardHoverProps {
    text: string;
}
const CardHover: React.FC<CardHoverProps> = ({ text }) => {
    return <StyledCardHover>{text}</StyledCardHover>;
};

export default CardHover;
