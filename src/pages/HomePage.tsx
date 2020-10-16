import React from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

const typesOfCritters = ['Fish', 'Sea Creatures', 'Bugs'];

export const HomePage = () => {
    return (
        <div>
            <p>Welcome to Critterpedia!</p>
            <Button label="Fish" path="/Fish"></Button>
        </div>
    )
}