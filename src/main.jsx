import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Users from './Users';
import App from './App';


const router = createBrowserRouter([{

  path : "/",

  element:<Users></Users>,
  
},

{
  children :[{

    index : true,


    element : <App></App>



  }]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
