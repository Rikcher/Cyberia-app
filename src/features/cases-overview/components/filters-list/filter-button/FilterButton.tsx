import useFilterStore from "../../../services/store";
import { StyledFilterButton, StyledCircle } from "./FilterButton.styles";
import { useHoverWithCircle } from "../../../../../shared/hooks/useHoverWithCircle";

interface FilterButtonProp {
    id: number | string;
    label: string;
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProp> = ({ id, label, onClick }) => {
    const { selectedFilterId } = useFilterStore();
    const isActive = selectedFilterId === id;

    const { hoverRef, circleRef, isHovered, circlePosition } =
        useHoverWithCircle();

    return (
        <StyledFilterButton
            onClick={onClick}
            className={isActive ? "active" : ""}
            ref={hoverRef}
        >
            <p>{label}</p>
            {isHovered && (
                <StyledCircle
                    ref={circleRef}
                    style={{
                        left: `${circlePosition.x}px`,
                        top: `${circlePosition.y}px`,
                        transform: isActive ? "scale(10)" : "",
                    }}
                />
            )}
        </StyledFilterButton>
    );
};

export default FilterButton;
