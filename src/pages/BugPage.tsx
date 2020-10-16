import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const BugPage = () => {

    const url = 'https://acnhapi.com/v1/bugs';
    const [bugs, setBugs] = useState<[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            const bugData = Object.entries(result.data);
            console.log(bugs);
        };
        fetchData();
    }, []);

    return (
        <div>
            <p>test</p>
        </div>
        );
}