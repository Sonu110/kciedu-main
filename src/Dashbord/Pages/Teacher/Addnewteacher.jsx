import React from "react";
import { useState } from "react";
import API_ENDPOINT from '../../../config';
function Addnewteacher() {

    const [Formdata ,setfromdata]= useState(
        {
            name :'',
            knowledge:'',
            phone:'',
            gender :'',
            dob:'',
            salary:'',
            address:'',
            branch:'',
            Files:null,



        }
    )

    const [Loading ,setLoading] = useState(false)

function handlehange(e) 
{
    if (e.target.name === 'Files') {
        setfromdata({ ...Formdata, Files: e.target.files[0] });
      } else {
        setfromdata({ ...Formdata, [e.target.name]: e.target.value });
      }
}



async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    try {
        const formDataToSend = new FormData();
        for (const key in Formdata) {
          formDataToSend.append(key, Formdata[key]);
        }
        
        const response = await fetch(`${API_ENDPOINT}/newteacher`, {
            method: 'POST',
            body: formDataToSend,
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          });
          if (response.ok) {
            console.log('Student data submitted successfully');
            alert("Data submitted");
          } else {
            console.error('Failed to submit student data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
        finally
        {
          setLoading(false)
        }


    
  }











  return (
    <div>
      <div className="flex flex-col items-center justify-center  bg-gray-200 p-9">
        <div className="bg-white p-10 rounded-lg shadow-lg sm:min-w-[500px]  min-w-full">
          <h1 className="text-3xl font-bold mb-4">Add Teacher</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter teacher's name"
                onChange={handlehange}
                value={Formdata.name}
               
              />
            </div>
            <div>
              <label
                htmlFor="knowledge"
                className="block text-gray-800 font-bold mb-2"
              >
                Hire Knowledge
              </label>
              <input
                type="text"
                id="knowledge"
                name="knowledge"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter teacher's knowledge/expertise"
                onChange={handlehange}
                value={Formdata.knowledge}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-800 font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="+91 ....... "
                onChange={handlehange}
                value={Formdata.phone}
              />
            </div>
            <div className=" grid grid-cols-2 items-center  justify-between ">
              <div>
                <label
                  htmlFor="gender"
                  className="block text-gray-800 font-bold mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  onChange={handlehange}
             
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="dob"
                  className="block text-gray-800 font-bold mb-2"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  onChange={handlehange}
             
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="salary"
                className="block text-gray-800 font-bold mb-2"
              >
                salary
              </label>
              <input
                type="number"
                id="salary"
                name="salary"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter salary  "
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-gray-800 font-bold mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="5"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter teacher's address"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="branch"
                className="block text-gray-800 font-bold mb-2"
              >
                Branch
              </label>
              <select
                id="branch"
                name="branch"
                className="w-full border border-gray-300 p-2 rounded-lg"
                onChange={handlehange}
              
              >
                <option value="roshan">Roshan</option>
                <option value="vinay">Vinay</option>
                <option value="91">91</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="File"
                className="block text-gray-800 font-bold mb-2"
              >
                Image
              </label>
              <input
                type="file"
                id="File"
                name="Files" // Change 'File' to 'Files' to match the state key
                className="w-full border border-gray-300 p-2 rounded-lg"
                onChange={handlehange}
              
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="w-1/2 rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
              >
                Submit
              </button>
              <button
                type="reset"
                className="w-1/2 rounded-3xl bg-red-500 px-6 py-2 text-xl font-medium uppercase text-white"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addnewteacher;
