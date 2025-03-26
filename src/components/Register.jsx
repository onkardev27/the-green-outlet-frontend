import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import banner from '../assets/banner.jpg';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  // Registration form state
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: '',
  });

  // Switch between login/register based on route
  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  const handleCreateAccount = () => {
    console.log('Registration Data:', registerData);
    navigate('/login');
  
  };

  const handleLogin = () => {
    navigate("/ourproduct")
    console.log('Login Data:', loginData);
  };



  return (
    <div className="flex p-10">
      {/* Banner Section */}
      <div
        className="w-full lg:w-1/2 flex flex-col items-center justify-center border rounded-[10px] mt-10"
        style={{ background: 'linear-gradient(to bottom,#333538 50%, #0c0d0d )' }}
      >
        <div className="flex flex-col items-center text-center my-8">
          <h1 className="text-3xl font-bold mb-2 text-white">The Green Outlet</h1>
          <h2 className="text-lg text-gray-600 w-10/12">
            Your eco-friendly shopping destination!
          </h2>
        </div>
        <img src={banner} alt="banner" className="w-1/2 h-auto rounded-lg shadow-md" />
      </div>

      {/* Auth Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-10">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">
            {isLogin ? 'Login to your account' : 'Create a new account'}
          </h1>
          <h2 className="text-gray-600">
            {isLogin
              ? 'Enter your credentials to log in.'
              : 'Fill out the details to join The Green Outlet community.'}
          </h2>
        </div>

        {isLogin ? (
          // Login form
          <div className="space-y-6 w-full max-w-md mt-6">
            <div className="text-start">
              <label htmlFor="username" className="font-semibold mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="border rounded-[15px] px-4 py-2 w-full"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              />
            </div>

            <div className="text-start">
              <label htmlFor="password" className="font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border rounded-[15px] px-4 py-2 w-full"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>

            <button
              className="border px-6 py-3 text-white bg-black hover:bg-blue-600 rounded-[30px] w-full"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        ) : (
          // Registration form
          <div className="space-y-6 w-full max-w-md mt-6">
            <div className="text-start">
              <label htmlFor="name" className="font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="border rounded-[15px] px-4 py-2 w-full"
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
              />
            </div>

            <div className="text-start">
              <label htmlFor="email" className="font-semibold mb-1">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your work email"
                className="border rounded-[15px] px-4 py-2 w-full"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              />
            </div>

            <div className="text-start">
              <label htmlFor="phone" className="font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="border rounded-[15px] px-4 py-2 w-full"
                value={registerData.phone}
                onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
              />
            </div>

            <div className="text-start">
              <label htmlFor="password" className="font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="border rounded-[15px] px-4 py-2 w-full"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              />
            </div>

            <div className="text-start">
              <label htmlFor="address" className="font-semibold mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Eg: Pune, Maharashtra"
                className="border rounded-[15px] px-4 py-2 w-full"
                value={registerData.address}
                onChange={(e) => setRegisterData({ ...registerData, address: e.target.value })}
              />
            </div>

            <button
              className="border px-6 py-3 text-white bg-black hover:bg-blue-600 rounded-[30px] w-full"
              onClick={handleCreateAccount}
            >
              Create Account
            </button>
          </div>
        )}

        <div className="mt-6">
          <button
            className="text-blue-600 hover:underline"
            onClick={() => navigate(isLogin ? '/register' : '/login')}
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
