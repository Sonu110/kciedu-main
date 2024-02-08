import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Tableloading() {
  return (
    <div style={{ gap:"5px", display:"grid" , gridTemplateColumns:"1.5fr 0.5fr 1fr", backgroundColor:"white" }}>
      
    <Skeleton  style={{height:"100vh"}}/>

    <Skeleton  style={{height:"100vh"}}/>

    <Skeleton  style={{height:"100vh"}}/>
</div>
  )
}

export default Tableloading