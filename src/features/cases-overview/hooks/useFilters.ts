import { useGenericQuery } from '../../../services/queries/queries';
import { Filter } from '../types';

export const useFilters = () => {
    return useGenericQuery<{ items: Filter[] }>('filters', '/project-categories');
};
