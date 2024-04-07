import { Link, Outlet } from 'react-router-dom';


function App() {
  
  return (
    <>
      <ul>
        <li><Link to="/">App</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>   
        <li><Link to="dashboard">Dashboard</Link></li> 
      </ul>
      {/* <RouterProvider router={router} /> */}

      <Outlet />
    </>
  )
}

export default App
