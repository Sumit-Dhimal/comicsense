import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import Button from "../components/ui/Button";
import "./pages.css";

import { FcGoogle } from "react-icons/fc";
import { LuArrowLeft } from "react-icons/lu";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/users/login", {
        email,
        password
      })

      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="bg-gray-200 w-full h-screen flex justify-center items-center shadow-2xl">

      {/* centerd container */}
      <div className="bg-gray-50 rounded-md h-140 w-fit flex p-5">

        {/* side image */}
        <div className="w-125 relative bg-blue-500 h-full rounded-md">
          {/* here will be image slide show */}

          <button 
            className="
              absolute right-2 top-2
              bg-gray-50/50 text-gray-600
              px-2 py-2 rounded-md font-semibold text-sm cursor-pointer
            "
          >
            <Link to={"/"} className="flex items-center gap-2">
              <LuArrowLeft className="font-bold text-2xl" />
              Back to home
            </Link>
          </button>
        </div>

        {/* login form */}
        <div className="px-12 flex flex-col items-center justify-center">
          <h2 className="form-header">Sign In</h2>
          <p className="w-full text-sm text-gray-700">
            Do not have an account? &nbsp;
            <Link 
              to={"/register"}
              className="underline hover:text-pink-600"
            >
              Register
            </Link>
          </p>

          
          {/* actual form */}
          <form 
            onSubmit={handleLogin}
            className="flex flex-col mt-8"
          >
            
            <input 
              id="email"
              name="email"
              type="email"
              value={email}
              autoComplete="email"
              placeholder="email address"
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              id="password"
              name="password"
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              autoComplete="current-password"
              className="form-input"
            />

            <Button 
              variant="primary" 
              size="md"
              className="w-full mt-4"
              type="submit"
            > 
              Sign In 
            </Button>

            <Link 
              to="/lostYourPassword"
              className="mt-6 inline-block text-pink-500 hover:underline text-sm"
            >
              Lost your password?
            </Link>

            
            <div className="w-full my-4 flex items-center gap-4 text-xs text-gray-600"> 
              <hr className="grow" />
              Or login with 
              <hr className="grow" />
            </div>
             
            <Button variant="dark" className="w-full gap-2 flex justify-center items-center">
              <FcGoogle size={24} />
              Continue with google
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;