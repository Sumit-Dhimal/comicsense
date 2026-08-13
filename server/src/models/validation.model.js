import mongoose from "mongoose";

const verificationSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verificationCode: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  }
}, 
{
  timestamps: true,
}
);

// creates a Time-To-Live (TTL)
verificationSchema.index(
  { expiresAt: 1},
  { expriresAfterSeconds: 0}
);

const Verification = mongoose.model("Verification", verificationSchema);

export default Verification;