import * as types from '../types';

export const updatingCloseChat = (payload) => async dispatch => {
    dispatch({
        type: types.GET_CLOSECHAT,
        payload: payload
    })
}