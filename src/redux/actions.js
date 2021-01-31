export const FETCH_FISH_DATA_PENDING = 'FETCH_FISH_DATA_PENDING';
export const FETCH_FISH_DATA_SUCCESS = 'FETCH_FISH_DATA_SUCCESS';
export const FETCH_FISH_DATA_ERROR = 'FETCH_FISH_DATA_ERROR';

export const FETCH_BUGS_DATA_PENDING = 'FETCH_BUGS_DATA_PENDING';
export const FETCH_BUGS_DATA_SUCCESS = 'FETCH_BUGS_DATA_SUCCESS';
export const FETCH_BUGS_DATA_ERROR = 'FETCH_BUGS_DATA_ERROR';

export const FETCH_SEA_CREATURES_DATA_PENDING = 'FETCH_SEA_CREATURES_DATA_PENDING';
export const FETCH_SEA_CREATURES_DATA_SUCCESS = 'FETCH_SEA_CREATURES_DATA_SUCCESS';
export const FETCH_SEA_CREATURES_DATA_ERROR = 'FETCH_SEA_CREATURES_DATA_ERROR';

export const fetchFishDataPending = () => {
    return {
        type: FETCH_FISH_DATA_PENDING
    }
}

export const fetchFishDataSuccess = (data) => {
    return {
        type: FETCH_FISH_DATA_SUCCESS,
        data: data
    }
}

export const fetchFishDataError = (error) => {
    return {
        type: FETCH_FISH_DATA_ERROR,
        error: error
    }
}

const fetchBugsDataPending = () => {
    return {
        type: FETCH_BUGS_DATA_PENDING
    }
}

const fetchBugsDataSuccess = (data) => {
    return {
        type: FETCH_BUGS_DATA_SUCCESS,
        data: data
    }
}

const fetchBugsDataError = (error) => {
    return {
        type: FETCH_BUGS_DATA_ERROR,
        error: error
    }
}

const fetchSeaCreaturesDataPending = () => {
    return {
        type: FETCH_SEA_CREATURES_DATA_PENDING
    }
}

const fetchSeaCreaturesDataSuccess = (data) => {
    return {
        type: FETCH_SEA_CREATURES_DATA_SUCCESS,
        data: data
    }
}

const fetchSeaCreaturesDataError = (error) => {
    return {
        type: FETCH_SEA_CREATURES_DATA_ERROR,
        error: error
    }
}