import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface FormData {
  fullname: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/signup",
        formData
      );
      console.log(response);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-semibold mb-4">Signup</h1>
        <div className="mb-4">
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            value={formData.fullname}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
        >
          Signup
        </button>
        <Link
          to="/login"
          className="w-full text-end text-rose-500  hover:text-rose-600 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
