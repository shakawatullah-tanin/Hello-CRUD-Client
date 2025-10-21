import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {

    const user = useLoaderData()

    console.log(user)


    const handleUpdate = (e) =>{

        e.preventDefault()


        const name = e.target.name.value;

        const email = e.target.email.value;

        const updateUser = {name,email}


        
        console.log(updateUser)

        fetch(`http://localhost:5006/users/${user._id}`,{

            method : "PUT",
            headers :{
                "content-type" : "application/json"
            },
            body : JSON.stringify(updateUser)
            
        })
        .then(res => res.json())
        .then(data=>console.log(data))

    }




    return (
 
            <form onSubmit={handleUpdate}>

                <input className='border' type="name" name="name" placeholder='name' id="" defaultValue={user.name}/><br />
                <input className='border' type="email" name="email" placeholder='email' defaultValue={user.email} id="" /><br />
                <button className='btn'>Update</button>
            </form>
 
    );
};

export default UpdateUser;