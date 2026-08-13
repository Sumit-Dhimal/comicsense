import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerification = async (email, code) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify your email",
    text: `Your verification code is ${code}. This code will expire in 5 minutes`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Verify you email</h2>

        <p>Use the following code to verify your email address:</p>

        <h1 style="letter-spacing: 5px;">${code}</h1>

        <p>If you did not request this code, you can ignore this email</p>
      </div>
    `
  }

  await transporter.sendMail(mailOptions);
}

export default sendVerification;