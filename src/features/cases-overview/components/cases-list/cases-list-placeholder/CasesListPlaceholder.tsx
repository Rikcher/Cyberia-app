import { StyledCasesListPlaceholder } from "./CasesListPlaceholder.styles";
import { StyledCasesList } from "../CasesList.styles";

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
