import StyledCasesListPlaceholder from "./StyledCasesListPlaceholder";
import StyledCasesList from "../StyledCasesList";

interface CasesListPlaceholderProps {
    length: number;
}

const CasesListPlaceholder: React.FC<CasesListPlaceholderProps> = ({
    length,
}) => {
    return (
        <StyledCasesList>
            {Array.from({ length }).map((_, index) => (
                <StyledCasesListPlaceholder key={index} />
            ))}
        </StyledCasesList>
    );
};

export default CasesListPlaceholder;
