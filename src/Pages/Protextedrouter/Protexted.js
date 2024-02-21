// Protexted.jsx
import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

function Protexted({ user ,name , kcidata , children}) {
  console.log("the user data", user , name ,kcidata);
  if (user  && name ==='admin') {
    return <Outlet></Outlet>;
}
if (user  && name ==='head') {
  return <Outlet></Outlet>;
}


  if(kcidata )
  {
    return children
  }

  return <Navigate to="/login" />;
}

export default Protexted;
