import { useFilters } from "../services/quries";

const Filters = () => {
    const { data, isError, isLoading } = useFilters();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    const filters = data.items;
    console.log(filters);

    return <div>Filters</div>;
};

export default Filters;
