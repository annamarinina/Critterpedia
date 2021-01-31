import {
    fetchSeaCreaturesDataPending, 
    fetchSeaCreaturesDataSuccess, 
    fetchSeaCreaturesDataError
    } from './actions';

const fetchSeaCreaturesData = () => {
    return dispatch => {
        dispatch(fetchSeaCreaturesDataPending());
        fetch('https://acnhapi.com/v1/sea') // axios?
        .then(res => res.json())
        .then(res => {
            res = {results: Object.keys(res).map((key) => { return res[key] })}
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchSeaCreaturesDataSuccess(res.results));
            return res.results; 
        })
        .catch(error => {
            dispatch(fetchSeaCreaturesDataError(error));
        })
    }
}

export default fetchSeaCreaturesData;