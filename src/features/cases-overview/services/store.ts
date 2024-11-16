import { create } from 'zustand';

interface FilterState {
    selectedFilterId: number | null; 
    setSelectedFilter: (id: number | null) => void;
}

const useFilterStore = create<FilterState>((set) => ({
    selectedFilterId: null, 
    setSelectedFilter: (id) => set({ selectedFilterId: id }),
}));

export default useFilterStore;
