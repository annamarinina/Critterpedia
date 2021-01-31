import {
    fetchFishDataPending, 
    fetchFishDataSuccess, 
    fetchFishDataError
    } from './actions';

const fetchFishData = () => {
    return dispatch => {
        dispatch(fetchFishDataPending());
        fetch('https://acnhapi.com/v1/fish') // axios?
        .then(res => res.json())
        .then(res => {
            res = {results: Object.keys(res).map((key) => { return res[key] })};
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchFishDataSuccess(res.results));
            console.log(res.results);
            return res.results;
        })
        .catch(error => {
            dispatch(fetchFishDataError(error));
        })
    }
}

export default fetchFishData;