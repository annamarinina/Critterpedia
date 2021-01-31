import {
    fetchBugsDataPending, 
    fetchBugsDataSuccess, 
    fetchBugsDataError
    } from './actions';

const fetchBugsData = () => {
    return dispatch => {
        dispatch(fetchBugsDataPending());
        fetch('https://acnhapi.com/v1/bugs') // axios?
        .then(res => res.json())
        .then(res => {
            res = {results: Object.keys(res).map((key) => { return res[key] })}
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchBugsDataSuccess(res.results));
            return res.results;
        })
        .catch(error => {
            dispatch(fetchBugsDataError(error));
        })
    }
}

export default fetchBugsData;