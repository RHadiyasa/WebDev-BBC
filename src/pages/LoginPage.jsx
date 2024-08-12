import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.get("/users", {
        params: { username, password },
      });

      console.log(response.data[0]);

      const user = response.data[0];

      // if (!user) {
      //   toast.error("Ga ada kontol");
      // }

      if (user) {
        navigate("/profile-page", { state: { user } }); // useLocation()
      } else {
        toast.error("Invalid login");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Toaster />
      <div className="grid gap-3 w-full px-10 md:w-1/2 lg:w-1/3">
        <div className="text-center mb-5 font-bold text-3xl">
          Login Page
        </div>
        <div className="flex gap-2">
          <Input
            label="Username"
            placeholder="Your Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Your Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button color="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
