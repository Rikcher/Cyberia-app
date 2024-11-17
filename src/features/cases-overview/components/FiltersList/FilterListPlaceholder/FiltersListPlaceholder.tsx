import StyledFiltersListPlaceholder from "./StyledFiltersListPlaceholder";
import StyledFiltersList from "../StyledFiltersList";

interface FiltersListPlaceholderProps {
    length: number;
}

const FiltersListPlaceholder: React.FC<FiltersListPlaceholderProps> = ({
    length,
}) => {
    return (
        <StyledFiltersList>
            {Array.from({ length }).map((_, index) => (
                <StyledFiltersListPlaceholder key={index} />
            ))}
        </StyledFiltersList>
    );
};

export default FiltersListPlaceholder;
