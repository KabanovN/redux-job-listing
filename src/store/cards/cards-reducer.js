import { ADD_CARDS } from './cards-actions';

export const cardsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CARDS:
            return action.payload;
        default:
            return state;
    }
};
