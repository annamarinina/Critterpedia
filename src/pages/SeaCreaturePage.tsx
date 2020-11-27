import React from 'react';
import useSeaCreatureService from '../services/SeaCreatureService';

export const SeaCreaturePage = () => {
    const service = useSeaCreatureService();

    return (
        <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' && service.payload.results.map((seaCreature) => (
          console.log(seaCreature)
      ))
        }
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
    )
}