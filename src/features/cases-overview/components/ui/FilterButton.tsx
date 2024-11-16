import StyledFilterButton from "../../styles/StyledFilterButton";

interface FilterButtonProp {
    label: string;
}

const FilterButton: React.FC<FilterButtonProp> = ({ label }) => {
    return <StyledFilterButton>{label}</StyledFilterButton>;
};

export default FilterButton;
