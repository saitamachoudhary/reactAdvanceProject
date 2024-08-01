import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
const App = () => {
   const router=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/Dashboard',
      element:<Dashboard/>
    }
   ])
  return (
    <div className="ParentStyling">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
