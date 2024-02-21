// Protexted.jsx
import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

function HeadProtexted({ user ,name , kcidata , children}) {
  console.log("the user data", user , name );

if (user  && name ==='head') {
  return <Outlet></Outlet>;
}

  return <Navigate to="/login" />;
}

export default HeadProtexted;
