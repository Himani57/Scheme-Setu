import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Email must be a valid @gmail.com address"],
},
phoneNumber: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
},
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const authModel = mongoose.model("Auth", authSchema);

export default authModel;
