import * as types from '../types';

const initialState = {
    loading: false,
    openChat : false,
}

export const openChatReducer = (state = initialState, action) => {
    if(action.type === types.GET_OPENCHAT){
        return{
            ...state,
            loading: true,
            openChat: action.payload
        }
    } else{
        return state
    }
}