// Protexted.jsx
import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

function Protexted({ user ,name , kcidata , children}) {
  console.log("the user data", user , name ,kcidata);
  if (user  && name ==='admin') {
    console.log("Admin logged in, navigating to /dashbord");
      return <Outlet></Outlet>;
  }
  if(kcidata )
  {
    return children
  }

  return <Navigate to="/login" />;
}

export default Protexted;
