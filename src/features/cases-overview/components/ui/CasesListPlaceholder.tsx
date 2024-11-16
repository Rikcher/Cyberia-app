import StyledCasesListPlaceholder from "../../styles/StyledCasesListPlaceholder";
import StyledCasesList from "../../styles/StyledCasesList";

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
