import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const data = useLoaderData()
    console.log(data)
    return (
        <div>

            <h2>Hello</h2>
            
        </div>
    );
};

export default UserDetails;