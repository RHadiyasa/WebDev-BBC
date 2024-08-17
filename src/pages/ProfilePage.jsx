import { Button } from "@nextui-org/react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.state);

  const { user } = location.state;
  console.log("User: ", user);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Toaster />
      <div className="text-center">
        <div className="font-bold text-2xl">Profile Page</div>
        <div>Welcome, {user.username}</div>

        <div className="flex p-5 gap-5 rounded-lg">
          {/* Container untuk Counter */}
          <div className="rounded-lg">
            <Button
              variant="solid"
              color="primary"
              as={Link}
              to={"/counter"}
            >
              Counter
            </Button>
            {/* <Link to={"/counter"}>Counter Link</Link> */}
          </div>
          {/* Container untuk Todo List */}
          <div className="rounded-lg">
            <Button variant="solid" color="danger" as={Link} to={"/todolist"}>
              To Do List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
