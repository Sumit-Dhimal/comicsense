import "../components.css";
import Button from "../ui/Button";

const OTPVerification = ({
    email,
    otpCode,
    setOtpCode,
    handleVerifyCode,
  }) => {

  return (
    <div className="mx-8 mt-16">
      <h2 className="form-header">Enter OTP</h2>
      <p className="text-xs">An OTP has been sent to your email. <button type="button">Resend code</button></p>

      <form 
        onSubmit={handleVerifyCode}
        className="flex flex-col items-center justify-center mt-8 "
      >
        <input 
          id="email"
          name="email"
          type="email"
          value={email}
          className="form-input"
          readOnly
        />

        <input 
          id="otp"
          name="otp"
          type="text" 
          inputMode="numeric"
          value={otpCode}
          placeholder="Enter otp"
          className="form-input"
          maxLength={6}
          onChange={(e) => setOtpCode(e.target.value)}
        />

        <Button 
          variant="primary"
          className="w-full mt-6"
          type="submit"
        >
          Verify code
        </Button>
      </form>
    </div>
  );
}

export default OTPVerification;