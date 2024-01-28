import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Tools from './Components/Tools.jsx'
import Login from './Components/Login.jsx'
import Categories from './Components/Categories.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [{
      path : "",
      element : <Home/>
    },
    {
      path : "about",
      element : <About/>
    },
    {
      path : "tools",
      element : <Tools/>
    },
    {
      path : "login",
      element : <Login/>
    },
    {
      path : "categories",
      element :<Categories/>
    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router}/>
 
  </React.StrictMode>,
)
