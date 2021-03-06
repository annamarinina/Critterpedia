import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Fish } from '../types/Fish';

export interface Fishes {
    results: Fish[];
}

const useFishService = () => {
    const [result, setResult] = useState<Service<Fishes>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch('https://acnhapi.com/v1/fish')
        .then(response => response.json())
        .then(response => {
            response = {results: Object.keys(response).map((key) => { return response[key]})};
            setResult({ status: 'loaded', payload: response });
        })
        .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default useFishService;