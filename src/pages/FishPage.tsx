import React from 'react';
import useFishService from '../services/FishService';

export const FishPage = () => {
    const service = useFishService();

    return (
        <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' && console.log(service.payload)
        }
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
    )
}