import React, { useContext, useState } from 'react';
import API_ENDPOINT from '../config';
import { userconetxt } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Studentlogin = () => {
  const [studentId, setStudentId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {setlogin , setiskcistuentdata} = useContext(userconetxt)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      studentId,
      username,
      password,
    };

    try {
      const response = await fetch(`${API_ENDPOINT}/studentlogin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
       
        const { data: studentData } = result;
        setlogin(true)
        setiskcistuentdata(true)
        localStorage.setItem('kcistuent', JSON.stringify(studentData));
       alert("yes")
       navigate('/stuentprofile');
        console.log('Login successful', studentData);
      } else {
        // Error logging in
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Student Login</h2>
          <div className="mb-4">
            <label htmlFor="studentId" className="block text-gray-700 font-bold mb-2">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your student ID"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Studentlogin;



