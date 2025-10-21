import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './Components/App';
import UserDetails from './Components/UserDetails';
import Home from './Components/Home';
import UpdateUser from './Components/UpdateUser';


const router = createBrowserRouter([{

  path : "/",

  element:<App></App>,
  children : [{

    index :true ,

    Component : Home

    
  },

  {
    path : "/users/:id",
    loader : ({params})=>
      fetch(`http://localhost:5006/users/${params.id}`)
    ,
    Component :UserDetails
  },
  {
    path : "/update/:id",

    loader : ({params})=>fetch(`http://localhost:5006/users/${params.id}`),
    Component : UpdateUser

  }
]
  
},


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
