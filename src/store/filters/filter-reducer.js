import { ADD_FILTER, CLEAR_ALL_FILTERS, REMOVE_FILTER } from './filter-actions';

export const filtersReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER:
            return [...state, action.payload];
        case REMOVE_FILTER:
            return state.filter((item) => item !== action.payload);
        case CLEAR_ALL_FILTERS:
            return [];
        default:
            return state;
    }
};
