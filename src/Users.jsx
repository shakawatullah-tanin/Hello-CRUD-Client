import React, { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5006/users")
      .then((res) => res.json())
      .then((data) => {
        const newUsers = data.data.users;
        setUsers(newUsers);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    const email = e.target.email.value;

    const newUsers = { name, email };

    console.log(newUsers);
    fetch("http://localhost:5006/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUsers),
    })
      .then((res) => res.json())
      .then((data) => console.log("data after post:", data));

    setUsers([...users, newUsers]);
  };

  const handleDelete = (id) => {
  

    fetch(`http://localhost:5006/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => 
      {
        console.log(data.deletedCount)

       if(data.deletedCount){


        const remaing =  users.filter(user=>user._id!==id)

        setUsers(remaing)

        console.log(("data after delete :",data))
       }
       
      });
    

    console.log("delete id:", id);
  };
  return (
    <div>
      <h1>users : {users.length}</h1>
      <div className=" bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"></h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label"></label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Email"
                />
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <div></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {users.map((user) => (
        <>
          <User key={user._id} user={user}></User>
          <button onClick={() => handleDelete(user._id)} className="btn">
            x
          </button>
        </>
      ))}
    </div>
  );
};

export default Users;
