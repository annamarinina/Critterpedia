import React from 'react';
import useFishService from '../services/FishService';

export const FishPage = () => {
    const service = useFishService();

    return (
        <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' && service.payload.results.map((fish) => (
          console.log(fish)
      ))
        }
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
    )
}