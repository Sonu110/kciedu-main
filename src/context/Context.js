import { createContext, useEffect, useState } from "react";
import API_ENDPOINT from "../config";

const userconetxt = createContext();

function Providerfunction({ children }) {
  const [user, setuser] = useState(false);
  const[loginuserdata, setloginuserdata]=useState()
  const [username, setname] = useState('');
  const [islogin, setlogin] = useState(false);
  const [userdata, setuserdata] = useState({});
  const [loading, setLoading] = useState(true);
  const [coursedata , setcoursedata] = useState([])
  const [update, setupdate]= useState()
  const [iskcistuentdata , setiskcistuentdata] = useState(false)
  const [kcistuentdata, setkcistuentdata]=useState({})
  const [studentdata, setstudentdata]= useState()
const [Totalteacher , setteachers] = useState()



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/Allcoursedata`);
        const data = await response.json();
     
        setcoursedata(data.data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };
  
    fetchData();
  }, [update]);
  




  useEffect(() => {
    const checkToken = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const response = await fetch(`${API_ENDPOINT}/profile`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }); 

          if (response.ok) {
            const data = await response.json();
            setuser(data.data.isAdmin);
            setname(data.data.rolls);
            setlogin(true);
            setuserdata(data);
          } else {
            localStorage.removeItem('token');
            setuser(false);
            setlogin(false);
            setuserdata({});
          }
        } catch (error) {
          console.error("Error fetching profile data:", error);
        } finally {
          setLoading(false); // Set loading to false after fetching user data
        }
      } else {
        setLoading(false); // Set loading to false if there is no token
      }
    };

    checkToken();
  }, [islogin ,user]);


  useEffect(()=>{
    const cheakstuent = async () => {
      const storedToken = localStorage.getItem('kcistuent');

      if( storedToken)
      {
        setlogin(true);
        setiskcistuentdata(true)
        setkcistuentdata(JSON.parse(storedToken))
      }

    }
    cheakstuent()

  },[islogin])


  return (
    <userconetxt.Provider value={{ user, setuser, islogin, setlogin, userdata, username , setloginuserdata ,loginuserdata ,coursedata ,setupdate , setstudentdata , studentdata , setiskcistuentdata , iskcistuentdata ,kcistuentdata ,setteachers , Totalteacher}}>
      {!loading && children}
    </userconetxt.Provider>
  );
}


export { userconetxt, Providerfunction };
