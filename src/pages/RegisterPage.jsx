import { Divider, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const RegisterPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen font-bold text-3xl">
      <div className="grid gap-3 w-1/3">
        <div className="text-center">Register</div>
        <div className="grid gap-5">
          <Divider className="my-2" />
          <Input
            label="Username"
            type="username"
            placeholder="Enter your username"
          />
          <Input label="Email" type="email" placeholder="Enter your email" />
          <div className="flex items-center">
            <Input
              label="Password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter Your Password"
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
            />
            {isConfirmPasswordVisible ? (
              <FaRegEye
                className="absolute right-1/3 mr-5"
                size={20}
                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              />
            ) : (
              <FaRegEyeSlash
                className="absolute right-1/3 mr-5"
                size={20}
                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
