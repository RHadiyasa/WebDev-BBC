import React from "react";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  // console.log(location.state);

  const { user } = location.state;
  console.log("User: ", user);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="font-bold text-2xl">Profile Page</div>
        <div>Welcome, {user.username}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
