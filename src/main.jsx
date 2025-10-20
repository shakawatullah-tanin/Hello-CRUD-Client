import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'


const router = createBrowserRouter([{

  path : "/",

  element:<div>Helllo Router</div>

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
