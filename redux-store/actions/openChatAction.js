import * as types from '../types';

export const updatingOpenChat = (payload) => async dispatch => {
    dispatch({
        type: types.GET_OPENCHAT,
        payload: payload
    })
}