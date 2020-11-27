import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { SeaCreature } from '../types/SeaCreature';

export interface SeaCreatures {
    results: SeaCreature[];
}

const useSeaCreatureService = () => {
    const [result, setResult] = useState<Service<SeaCreatures>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch('https://acnhapi.com/v1/sea')
        .then(response => response.json())
        .then(response => {
            response = {results: Object.keys(response).map((key) => { return response[key]})};
            setResult({ status: 'loaded', payload: response });
        })
        .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default useSeaCreatureService;