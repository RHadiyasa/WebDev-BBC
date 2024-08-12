import { Button, Divider, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { axiosInstance } from "../lib/axios";
import toast, { Toaster } from "react-hot-toast";

const RegisterPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    // validasi panjang password, kombinasi
    if (password !== confirmPassword) {
      alert("Password tidak sama");
      return;
    }

    try {
      // Get user from database
      const existingUser = await axiosInstance.get("/users", {
        params: { username },
      });

      // Check panjang data dari existingUser
      if (existingUser.data.length > 0) {
        toast.error("User udah terdaftar");
        return;
      }

      const response = await axiosInstance.post("/users", {
        username,
        email,
        password,
      });

      // check response status
      // === (strict equal) ngebandingin value sama tipe datanya
      // == equal ngebandingin value

      // if (response.status === 404) {
      //   toast.error("Gagal register");
      //   return;
      // }

      toast.success("Register success!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Toaster />
      {/* Implementasi toaster dari react hot toast */}
      <div className="grid gap-3 w-1/3 ">
        <div className="text-center font-bold text-3xl">Register</div>
        <div className="grid gap-5">
          <Divider className="my-2" />
          <Input
            label="Username"
            type="username"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} // Event listener
          />
          <div className="flex items-center">
            <Input
              label="Password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter Your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {isPasswordVisible ? (
              <FaRegEye
                className="absolute right-1/3 mr-5" // mr -> margin right, pr -> padding right
                size={20}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            ) : (
              <FaRegEyeSlash
                className="absolute right-1/3 mr-5"
                size={20}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            )}
          </div>
          <div className="flex items-center">
            <Input
              label="Confirm Password"
              type={isConfirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            {isConfirmPasswordVisible ? (
              <FaRegEye
                className="absolute right-1/3 mr-5"
                size={20}
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
              />
            ) : (
              <FaRegEyeSlash
                className="absolute right-1/3 mr-5"
                size={20}
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
              />
            )}
          </div>
          <Button color="primary" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
