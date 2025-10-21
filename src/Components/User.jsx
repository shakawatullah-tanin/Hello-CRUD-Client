import React from 'react';

const User = ({user}) => {


    const {name,email} = user
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
        </div>
    );
};

export default User;