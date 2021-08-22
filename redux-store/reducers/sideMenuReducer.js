import * as types from '../types';

const initialState = {
    loading: false,
    sideMenu : "",
}

export const sideMenuReducer = (state = initialState, action) => {
    if(action.type === types.GET_SIDEMENU){
        return{
            ...state,
            loading: true,
            sideMenu: action.payload
        }
    } else{
        return state
    }
}