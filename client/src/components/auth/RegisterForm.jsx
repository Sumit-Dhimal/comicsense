import Button from "../ui/Button";
import { Link } from "react-router-dom";
import "../components.css";

import { FcGoogle } from "react-icons/fc";

const RegisterForm = ({
  username, email, password,
  setUsername, setEmail, setPassword,
  handleRegister
}) => {

  return (
    <div className="px-12 flex flex-col items-center justify-center">
      <h2 className="form-header">Create an account</h2>
      <p className="w-full text-sm text-gray-700">
        Already have an account? &nbsp;
        <Link 
          to={"/login"}
          className="underline hover:text-pink-600"
        >
          Sign In
        </Link>
      </p>

      {/* actual form */}
      <form 
        onSubmit={handleRegister}
        className="flex flex-col mt-8"
      >
        <input 
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          placeholder="username"
          className="form-input"
        />

        <input 
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="email address"
          className="form-input"
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

        {/* <div className="flex gap-2 mb-4 items-center">
          <input 
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            className="size-4 cursor-pointer"
          />
          <label htmlFor="rememberMe" className="text-sm cursor-pointer"> I agree to Terms and conditions</label>
        </div> */}

        <Button 
          variant="primary" 
          size="md"
          className="w-full mt-4"
          type="submit"
        > 
          Create account
        </Button>
        
        <div className="w-full my-4 flex items-center gap-4 text-xs text-gray-600"> 
          <hr className="grow" />
          Or register with 
          <hr className="grow" />
        </div>
          
        <Button variant="dark" className="w-full gap-2 flex justify-center items-center">
          <FcGoogle size={24} />
          Continue with google
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;