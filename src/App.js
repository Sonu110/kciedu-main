import './App.css';
import Error from './Pages/404error';
import Contact from './Pages/Contact';
import Course from './Pages/Course';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Deatils from './Pages/Deatils';
import About from './Pages/About';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import DashbordHome from './Dashbord/Pages/Home/DashbordHome';
import Protexted from './Pages/Protextedrouter/Protexted';
import Dashbordcardhomepage from './Dashbord/Pages/Home/Dashbordcardhomepage';
import Loginstudent from './Dashbord/Pages/Loginstudent/Loginstudent';
import Studentlist from './Dashbord/Pages/Student/Studentlist';

import Courselist from './Dashbord/Pages/Course/Courselist';
import Massage from './Dashbord/components/Massage';
import { useContext } from 'react';
import { userconetxt } from './context/Context';
import Addcourse from './Dashbord/Pages/Course/Addcourse';
import StudentForm from './Dashbord/Pages/Student/StudentForm';
import Teacherlist from './Dashbord/Pages/Teacher/Teacherlist';
import Newteacher from './Dashbord/Pages/Teacher/Newteacher';
import UpdateStudentForm from './Dashbord/Pages/Student/Updatefrom';
import StudentDetails from './Dashbord/Pages/Student/Studentdetails';
import Studentlogin from './Pages/Studentlogin';
import StudentProfilePage from './Pages/Studentprofile';
import Paymentform from './Dashbord/Pages/Paymentdatas/Paymentform';
import Paymentlist from './Dashbord/Pages/Paymentdatas/Paymentlist';
import Paymentupdatefrom from './Dashbord/Pages/Paymentdatas/Paymentupdatefrom';
import Placement from './Dashbord/Pages/Placemant/Placement';
import Career from './Pages/Career';
import Placementlist from './Dashbord/Pages/Placemant/Placementlist';

function App() {

  const {user , username ,iskcistuentdata} = useContext(userconetxt)

  const route  = createBrowserRouter(createRoutesFromElements(
<>    



<Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About></About>}></Route>
      
      <Route path='course' element={<Course></Course>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      <Route path='career' element={<Career></Career>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='signup' element={<Signup></Signup>}></Route>
      
      <Route path='stuentlogin' element={<Studentlogin></Studentlogin>}></Route>
      <Route path='stuentprofile' element={
      <Protexted kcidata={iskcistuentdata}>

      <StudentProfilePage></StudentProfilePage>
      </Protexted>
      
      }></Route>
      
      <Route path='details/:name' element={<Deatils></Deatils>}></Route>
      
    </Route>
    
    <Route path='/dashbord' element={<Protexted user={user} name ={username}></Protexted>}>
    <Route path='' element={<DashbordHome />}>
    <Route index element={<Dashbordcardhomepage/>}></Route>
    <Route path='Loginstudent' element={<Loginstudent />} /> 

    <Route path='student' element={<Studentlist />} />
    
    <Route path='newstudent' element={<StudentForm />} />
    <Route path='student/:studentId' element={<StudentDetails />} />
    <Route path='updatestudent/:studentId' element={< UpdateStudentForm />} />

    <Route path='payment' element={<Paymentform></Paymentform>}></Route>
    <Route path='paymentupdate/:id' element={<Paymentupdatefrom></Paymentupdatefrom>}></Route>
    
    <Route path='feereceipt' element={<Paymentlist></Paymentlist>}></Route>
    
    <Route path='staff' element={<Teacherlist />} />
    <Route path='newteacher' element={<Newteacher />} />
    <Route path='course' element={<Courselist />} />
    <Route path='newcourse' element={<Addcourse />} />
    <Route path='placement' element={<Placement />} />
    <Route path='career' element={<Placementlist />} />
    


    <Route path='logout' element={<Massage />} />
  </Route>
</Route>

    <Route path='*' element={<Error></Error>}></Route>
    
    </>

  ))

  return (
    <>
  
    <RouterProvider router={route}></RouterProvider>
    </>
    
  );
}

export default App;
