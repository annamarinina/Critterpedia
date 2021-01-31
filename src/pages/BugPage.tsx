import React from 'react';
import useBugService from '../services/BugService';

export const BugPage = () => {
    const service = useBugService();

    return (
        <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' && service.payload.results.map((bug) => (
          console.log(bug)
      ))
        }
      {service.status === 'error' && (
        <div>Error</div>
      )}
    </div>
    )
}