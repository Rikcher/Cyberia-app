import useFilterStore from "../../services/store";
import StyledFilterButton from "../../styles/StyledFilterButton";

interface FilterButtonProp {
    id: number | string;
    label: string;
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProp> = ({ id, label, onClick }) => {
    const { selectedFilterId } = useFilterStore();

    const isActive = selectedFilterId === id;

    return (
        <StyledFilterButton
            onClick={onClick}
            className={isActive ? "active" : ""}
        >
            {label}
        </StyledFilterButton>
    );
};

export default FilterButton;
