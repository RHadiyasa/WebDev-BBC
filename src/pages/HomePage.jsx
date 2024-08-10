import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen font-bold text-3xl">
      <div className="grid gap-3">
        <div className="text-center">BudiMind Software House</div>
        <div className="flex gap-3 justify-center">
          <Button color="primary" className="font-semibold px-10" as={Link} to={"/login"}>Login</Button>
          <Button color="primary" className="font-semibold px-10" as={Link} to={"/register"}>SignUp</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
