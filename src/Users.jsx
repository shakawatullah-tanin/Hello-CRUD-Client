import React from "react";
import { data } from "react-router";

const Users = () => {


  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    const email = e.target.email.value;

    const users = { name, email };

    console.log(users);
    fetch("http://localhost:5006/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => console.log("data after post:", data));
      if(data.insertedId){
      alert("User add success")
      }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
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
  );
};

export default Users;
