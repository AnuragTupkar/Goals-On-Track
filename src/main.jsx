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
import Notes from './Components/Notes.jsx'
import NewTask from './Components/NewTask.jsx'
import TaskStatus from './Components/TaskStatus.jsx'
import Stopwatch from './Components/Stopwatch.jsx'
import Project from './Components/Project.jsx'
import Routine from './Components/Routine.jsx'
// import { Provider } from 'react-redux'
// import reduxStore from './redux/auth/authSlice.js'
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
      path : "notes",
      element : <Notes/>
    },
    {
      path : "newtask",
      element: <NewTask/>
    },
    {
      path: "taskstatus",
      element: <TaskStatus/>
    }
    ,
    {
      path: "taskstatus",
      element: <TaskStatus/>
    },
    {
      path: "stopwatch",
      element: <Stopwatch/>
    }
    ,
    {
      path: "project",
      element: <Project/>
    },
    {
      path: "routine",
      element: <Routine/>
    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={reduxStore}> */}

      <RouterProvider router={router}/>
    {/* </Provider> */}
 
  </React.StrictMode>,
)
