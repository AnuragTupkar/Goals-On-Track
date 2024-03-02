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
import SignUp from './Components/Signup.jsx'
import Fitness from './Components/Fitness.jsx'
import Study from './Components/Study.jsx'
import Travel from './Components/Travel.jsx'
import Custom from './Components/Custom.jsx'
import NewTask from './Components/NewTask.jsx'
import TaskStatus from './Components/TaskStatus.jsx'
import { Provider } from 'react-redux'
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
    },
    {
      path : "signup",
      element : <SignUp/>
    },
    {
      path : "fitness",
      element : <Fitness/>
    },
    {
      path : "study",
      element : <Study/>
    },
    {
      path : "travel",
      element : <Travel/>
    },
    {
      path : "custom",
      element : <Custom/>
    },
    {
      path : "newtask",
      element: <NewTask/>
    },
    {
      path: "taskstatus",
      element: <TaskStatus/>
    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>

      <RouterProvider router={router}/>
    </Provider>
 
  </React.StrictMode>,
)
