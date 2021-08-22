import * as types from '../types';

export const updatingSideMenu = (payload) => async dispatch => {
    dispatch({
        type: types.GET_SIDEMENU,
        payload: payload
    })
}