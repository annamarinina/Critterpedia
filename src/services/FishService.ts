import { useEffect, useState } from 'react';
import { Service } from './Service';
import { Fish } from '../models/Fish';

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
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default useFishService;