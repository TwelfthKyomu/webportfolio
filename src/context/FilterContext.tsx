'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

type ProjectFilter = 'all' | 'personal' | 'commercial' | 'updates';

type FilterContextType = {
    currentFilter: ProjectFilter;
    setFilter: (filter: ProjectFilter) => void;
};

const FilterContext = createContext<FilterContextType>({
    currentFilter: 'all',
    setFilter: () => {},
});

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [currentFilter, setCurrentFilter] = useState<ProjectFilter>('all');

    const setFilter = (filter: ProjectFilter) => {
        setCurrentFilter(filter);
    };

    return (
        <FilterContext.Provider value={ { currentFilter, setFilter } }>
            { children }
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);

    if (!context) {
        throw new globalThis.Error('useFilter must be used within a FilterProvider');
    }

    return context;
};
