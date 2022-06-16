export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';
export const ADD_FILTER = 'ADD_FILTER';

export const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    payload: filter,
});

export const addFilter = (filter) => ({
    type: ADD_FILTER,
    payload: filter,
});

export const clearAllFilters = {
    type: CLEAR_ALL_FILTERS,
};
