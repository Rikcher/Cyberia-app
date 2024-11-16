import StyledCaseCard from "../styles/StyledCaseCard";
import CardTitle from "./ui/CardTitle";

interface CaseCardProps {
    bgImgUrl: string;
    title: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ bgImgUrl, title }) => {
    return (
        <StyledCaseCard $bgImgUrl={bgImgUrl}>
            <CardTitle text={title} />
        </StyledCaseCard>
    );
};

export default CaseCard;
