import {
    ADDRESS_LIST_REQUEST,
    ADDRESS_LIST_SUCCESS,
    ADDRESS_LIST_FAIL,
    ADDRES_ADD_REQUEST,
    ADDRES_ADD_SUCCESS,
    ADDRES_ADD_FAIL,
    ADDRES_ADD_RESET,
    ADDRESS_REMOVE_REQUEST,
    ADDRESS_REMOVE_SUCCESS,
    ADDRESS_REMOVE_FAIL,
} from '../constants/addressConstants';

export const addressListReducers = (state = { address: [] }, action) => {
    switch (action.type) {
        case ADDRESS_LIST_REQUEST:
            return { loading: true, address: [] };
        case ADDRESS_LIST_SUCCESS:
            return { loading: false, address: action.payload };
        case ADDRESS_LIST_FAIL:
            return { loading: false, error: action.payload, };
        default:
            return state;
    }
};

export const addressCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ADDRES_ADD_REQUEST:
            return { loading: true };
        case ADDRES_ADD_SUCCESS:
            return { loading: false, success: true, address_: action.payload };
        case ADDRES_ADD_FAIL:
            return { loading: false, error: action.payload, };
        case ADDRES_ADD_RESET:
            return {};
        default:
            return state;
    }
};

export const addressRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case ADDRESS_REMOVE_REQUEST:
            return { loading: true };
        case ADDRESS_REMOVE_SUCCESS:
            return { loading: false, success: true, };
        case ADDRESS_REMOVE_FAIL:
            return { loading: false, error: action.payload, };
        default:
            return state;
    }
};