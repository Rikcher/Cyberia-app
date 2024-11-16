import { useQuery } from '@tanstack/react-query';
import { getProjectCategories, getProject } from './api';


export const useFilters = () => {
    return useQuery({
        queryKey: ['filters'],
        queryFn: () => getProjectCategories(),
        staleTime: 300000, 
        gcTime: 900000,  
        refetchOnWindowFocus: false,
    });
};

export const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: () => getProject(),
        staleTime: 300000,  
        gcTime: 900000,  
        refetchOnWindowFocus: false,
    });
};
