
import { CoreActions as Actions } from "./actions";
import { CoreActionTypes as ActionTypes } from './actionTypes';

export const initialState: {
    loading: boolean,
    user: {}
} = {
    loading: true,
    user: {}
};

export const CoreReducer = (state = initialState, action: Actions) => {

    // switch (action.type) {

    //     default:
    //         return state;
    // }
}