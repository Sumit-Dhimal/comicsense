import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

import { LuArrowLeft } from "react-icons/lu";
import RegisterForm from "../components/auth/RegisterForm";
import OTPVerification from "../components/auth/OTPVerification";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [openOTPUI, setOpenOPTUI] = useState(false);
  const navigate = useNavigate();

  // this will send otp code
  const handleRegister = async(e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/users/sendOTP", {
        username,
        email,
        password
      });

      console.log(res);
      setOpenOPTUI(true);
    } catch (error) {
      console.error(error);
    }
  }

  // verify otp code
  const handleVerifyCode = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/users/verifyOTP", {
        email,
        otp: otpCode, // in backend it is otp
      })

      console.log(res);
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
        <div className="w-125 relative bg-blue-300 h-full rounded-md">
          {/* here will be image slide show */}

          {/* back to home btn */}
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

        {
          !openOTPUI ? (
            <RegisterForm 
              username={username}
              email={email}
              password={password}
              setUsername={setUsername}
              setEmail={setEmail}
              setPassword={setPassword}
              handleRegister={handleRegister}
            />
          ) : (
            <OTPVerification 
              email={email}
              otpCode={otpCode}
              setOtpCode={setOtpCode}
              handleVerifyCode={handleVerifyCode}
            />
          )
        }
        
      </div>
    </div>
  );
}

export default Register;