import { useFilters } from "../services/quries";
import FilterButton from "./ui/FilterButton";
import { Filter } from "../types";
import StyledFiltersList from "../styles/StyledFiltersList";

const FiltersList = () => {
    const { data, isError, isLoading } = useFilters();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    const filters = data.items;
    console.log(filters);

    return (
        <StyledFiltersList>
            {filters.map((filter: Filter) => (
                <FilterButton
                    key={filter.id}
                    label={filter.name}
                ></FilterButton>
            ))}
        </StyledFiltersList>
    );
};

export default FiltersList;
