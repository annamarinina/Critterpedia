import React from 'react';
import { Critter } from '../components/Critter';
import useFishService from '../services/FishService';

export const FishPage = () => {
    const service = useFishService();

    return (
        <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' && service.payload.results.map((fish) => (
        <Critter key={fish.id} imgUri={fish.image_uri} label={fish.name['name-USen']}></Critter>
      ))
        }
      {service.status === 'error' && (
        <div>Error</div>
      )}
    </div>
    )
}