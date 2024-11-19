import { useFilters } from "../../hooks/useFilters";
import FilterButton from "./filter-button/FilterButton";
import { Filter } from "../../types";
import { StyledFiltersList } from "./FiltersList.styles";
import useFilterStore from "../../services/store";
import FiltersListPlaceholder from "./filters-list-placeholder/FiltersListPlaceholder";

const FiltersList = () => {
    const { data, isError, isLoading } = useFilters();
    const { selectedFilterId, setSelectedFilter } = useFilterStore();

    if (isLoading) {
        return <FiltersListPlaceholder length={4} />;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    const filters = data?.items || [];

    return (
        <StyledFiltersList>
            {filters.map((filter: Filter) => (
                <FilterButton
                    key={filter.id}
                    id={filter.id}
                    label={filter.name}
                    onClick={() =>
                        setSelectedFilter(
                            filter.id === selectedFilterId ? null : filter.id
                        )
                    }
                ></FilterButton>
            ))}
        </StyledFiltersList>
    );
};

export default FiltersList;
