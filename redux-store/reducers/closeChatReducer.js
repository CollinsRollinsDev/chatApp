import * as types from '../types';

const initialState = {
    loading: false,
    closeChat : true,
}

export const closeChatReducer = (state = initialState, action) => {
    if(action.type === types.GET_CLOSECHAT){
        return{
            ...state,
            loading: true,
            closeChat: action.payload
        }
    } else{
        return state
    }
}