import UiActionTypes from './ui.types';
//import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    value: 2,
};


const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UiActionTypes.CHANGE_TAB:
            return {
                ...state,
                value: action.payload,

            };
        default:
            return state;
    }
};

export default uiReducer;








