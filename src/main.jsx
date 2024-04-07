import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthLayout from './layouts/AuthLayout';


function logoutUser() {
  // logout user
  // redirect to login page
  // return <Navigate to="/login" />
  console.log("logout")
}

// setting router
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: ({ request }) => {
          return fetch('https://dummyjson.com/carts', {
            signal: request.signal
          })
        }
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'register',
            element: <Register />
          },
          {
            path: "logout",
            action: logoutUser
          },
        ]
      }
    ]
   
  },
  // { path: '/about', element: <About /> },
  // { path: '/contact', element: <Contact /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
