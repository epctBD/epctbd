import type { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";
import { User } from "@/models/user.model";
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectToDatabase();

    // Ensure the body is parsed correctly
    let body;
    try {
      body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return res.status(400).json({ message: "Invalid request body" });
    }

    const { name, email, password, isAdmin } = body;

    // Check if all required fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    let hashedPassword;
    try {
      hashedPassword = await hash(password, 12);
    } catch (error) {
      console.error("Password hashing error:", error);
      return res.status(500).json({ message: "Error processing password" });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: isAdmin || false,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
