import StyledCaseCard from "../styles/StyledCaseCard";
import CardTitle from "./ui/CardTitle";
import StyledCardHover from "../styles/StyledCardHover";

interface CaseCardProps {
    bgImgUrl: string;
    title: string;
    description: string;
}

const CaseCard: React.FC<CaseCardProps> = ({
    bgImgUrl,
    title,
    description,
}) => {
    return (
        <StyledCaseCard $bgImgUrl={bgImgUrl}>
            <CardTitle text={title} />
            <StyledCardHover>{description}</StyledCardHover>
        </StyledCaseCard>
    );
};

export default CaseCard;
