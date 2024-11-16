import StyledFiltersListPlaceholder from "../../styles/StyledFiltersListPlaceholder";
import StyledFiltersList from "../../styles/StyledFiltersList";

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
