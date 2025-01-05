import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password should be at least 6 characters long"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

export const User = models.User || model("User", userSchema);
