import { combineReducers } from 'redux';
import { cardsReducer } from './cards/cards-reducer';
import { filtersReducer } from './filters/filter-reducer';

export const rootReducer = combineReducers({
    cards: cardsReducer,
    filters: filtersReducer,
});
