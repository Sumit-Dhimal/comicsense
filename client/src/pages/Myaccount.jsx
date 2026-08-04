import "./pages.css";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom"

import { FcGoogle } from "react-icons/fc";

const Myaccount = () => {
  return (
    <section className="h-fit w-full pt-36 pb-12">
      <div className="flex mx-auto h-full max-w-340">
        
        
        {/* -------------- login --------------- */}
        <div className="flex-1 border-r-2 px-8 border-gray-200">
          <h2 className="my-account-header">Login</h2>

          <Button variant="dark" className="my-8 flex items-center gap-4">
            <FcGoogle size={24} />
            Continue with google
          </Button>

          <form action=""
            className="block"
          >
            
            <label htmlFor="email" className="text-sm">
              Username or email address <strong className="text-red-500">*</strong>
            </label>
            <input 
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="form-input"
            />

            <label htmlFor="password" className="text-sm"> 
              Password <strong className="text-red-500">*</strong>
            </label>
            <input 
              id="password"
              name="password"
              type="password" 
              autoComplete="current-password"
              className="form-input"
            />

            <div className="flex gap-2 mb-4">
              <input 
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <Button 
              variant="secondary" 
              size="md"
              className="w-fit"
            > 
              Login 
            </Button>
          </form>

          <Link 
            to="/lostYourPassword"
            className="mt-6 inline-block text-pink-500 hover:underline text-sm"
          >
            Lost your password?
          </Link>
        </div>



        {/* ------------------ register ---------------------- */} 
        <div className="flex-1 px-8">
          <h2 className="my-account-header">Register</h2>

          <Button variant="dark" className="my-8 flex items-center gap-4">
            <FcGoogle size={24} />
            Continue with google
          </Button>

          <form action="" className="block">

            <label htmlFor="id" className="text-sm"> 
              Email Address <strong className="text-red-500">*</strong> 
            </label>
            <input 
              id="email"
              name="email"
              type="email" 
              className="form-input"
            />

            <p className="text-sm">
              A link to set a new password will be sent to your email address.
              <br />
              <br />
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our &nbsp;
              <Link to={'/policy'} className="text-pink-500 hover:underline">privacy policy</Link>.
            </p>

            <div className="flex gap-2 my-4">
              <input 
                id="updatesNotification"
                name="updatesNotification"
                type="checkbox"
              />
              <label htmlFor="updatesNotification"> I want to receive updates and notification.</label>
            </div>

            <Button 
              variant="secondary" 
              size="md"
              className="w-fit"
            > 
              Register
            </Button>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Myaccount;
