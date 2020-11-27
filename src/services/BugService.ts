import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Bug } from '../types/Bug';

export interface Bugs {
    results: Bug[];
}

const useBugService = () => {
    const [result, setResult] = useState<Service<Bugs>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch('https://acnhapi.com/v1/bugs')
        .then(response => response.json())
        .then(response => {
            response = {results: Object.keys(response).map((key) => { return response[key]})};
            setResult({ status: 'loaded', payload: response });
        })
        .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default useBugService;