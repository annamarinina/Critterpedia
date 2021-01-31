import {
    FETCH_FISH_DATA_PENDING, 
    FETCH_FISH_DATA_SUCCESS, 
    FETCH_FISH_DATA_ERROR,
    FETCH_BUGS_DATA_PENDING,
    FETCH_BUGS_DATA_SUCCESS,
    FETCH_BUGS_DATA_ERROR,
    FETCH_SEA_CREATURES_DATA_PENDING,
    FETCH_SEA_CREATURES_DATA_SUCCESS,
    FETCH_SEA_CREATURES_DATA_ERROR
    } from './actions';

export const initialState = {
    fish: {
        pending: false,
        data: [],
        error: null
    },
    bugs: {
        pending: false,
        data: [],
        error: null
    },
    seaCreatures: {
        pending: false,
        data: [],
        error: null
    }
}

export function dataReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_FISH_DATA_PENDING:
            return {
                ...state.fish,
                pending: true
            }
        case FETCH_FISH_DATA_SUCCESS:
            return {
                ...state.fish,
                pending: false,
                data: action.payload
            }
        case FETCH_FISH_DATA_ERROR:
            return {
                ...state.fish,
                pending: false,
                error: action.error
            }
        case FETCH_BUGS_DATA_PENDING:
            return {
                ...state.bugs,
                pending: true
            }
        case FETCH_BUGS_DATA_SUCCESS:
            return {
                ...state.bugs,
                pending: false,
                data: action.payload
            }
        case FETCH_BUGS_DATA_ERROR:
            return {
                ...state.bugs,
                pending: false,
                error: action.error
            }
        case FETCH_SEA_CREATURES_DATA_PENDING:
            return {
                ...state.seaCreatures,
                pending: true
            }
        case FETCH_SEA_CREATURES_DATA_SUCCESS:
            return {
                ...state.seaCreatures,
                pending: false,
                data: action.payload
            }
        case FETCH_SEA_CREATURES_DATA_ERROR:
            return {
                ...state.seaCreatures,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}


/// SELECTORS:

export const getFishData = state => state.fish.data;
export const getFishDataPending = state => state.fish.pending;
export const getFishDataError = state => state.fish.error;

export const getBugsData = state => state.bugs.data;
export const getBugsDataPending = state => state.bugs.pending;
export const getBugsDataError = state => state.bugs.error;

export const getSeaCreaturesData = state => state.seaCreatures.data;
export const getSeaCreaturesDataPending = state => state.seaCreatures.pending;
export const getSeaCreaturesDataError = state => state.seaCreatures.error;
