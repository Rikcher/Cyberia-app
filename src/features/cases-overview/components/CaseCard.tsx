import StyledCaseCard from "../styles/StyledCaseCard";
import CardTitle from "./ui/CardTitle";
import CardHover from "./ui/CardHover";

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
            <CardHover text={description} />
        </StyledCaseCard>
    );
};

export default CaseCard;
