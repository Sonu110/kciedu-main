import React from 'react'
import { GiBrain } from "react-icons/gi";
import { FaBookAtlas } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { CiCloudSun } from "react-icons/ci";
function Deatilsheader() {
  return (
    <div className="w-full bg-blue-400  flex items-center justify-between flex-wrap p-2 pl-3">
    {[ 
      {
        name:"Learn The Essential Skills",
        icons:  < GiBrain/> 
      } ,
      {
        name:"Earn Certificates And Degrees",
        icons:  < FaBookAtlas/> 
      } ,
      {
        name:"Get Ready for The Next Career",
        icons:  < FaBookAtlas/>
      }  , 
      {
        name:"Master at Different Areas",
        icons:   < CiCloudSun/> 
      } ,
          
  
  ].map((i) => (
      <div className="infobox max-w-[300px] flex items-center gap-2 ml-2 justify-center mt-2 px-5">
        <div className="icon text-white   text-[0.8rem] md:text-xl">{i.icons}</div>
        <div className="text text-white  text-[0.7rem] md:text-[1rem]">{i.name}</div>
      </div>
    ))}
  </div>
  )
}


export default Deatilsheader