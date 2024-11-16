import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getProjectCategories, getProject } from './api';
import { Project, Filter } from '../types';


export const useFilters = (): UseQueryResult<{ items: Filter[] }> => {
    return useQuery({
        queryKey: ['filters'],
        queryFn: () => getProjectCategories(),
        staleTime: 300000, 
        gcTime: 900000,  
        refetchOnWindowFocus: false,
    });
};

export const useProjects = (): UseQueryResult<{ items: Project[] }> => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: () => getProject(),
        staleTime: 300000,  
        gcTime: 900000,  
        refetchOnWindowFocus: false,
    });
};
