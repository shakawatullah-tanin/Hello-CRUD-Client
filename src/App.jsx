
import { useEffect, useState } from 'react'
import './App.css'
import User from './User'

function App() {

  const [users,setUsers] = useState([])


  useEffect(()=>{


    fetch("http://localhost:5006/users")
    .then(res=>res.json())
    .then(data=>setUsers(data.data.users))
  },[])

  console.log((users))
  return (
    <>

    {

      users.map(user=><User key={user._id} user= {user}></User>)
    }

    </>
  )
}

export default App
