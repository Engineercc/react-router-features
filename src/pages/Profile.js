import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';

const Profile = () => {
    const {setUser,user} = useAuth();
    const logoutHandle = ()=> {
        setUser(false);
    }
  return (
    <>
      <div>Profile</div>
      {!user && <Link to="/auth/login">Girş Yap</Link>}
      {user && <button onClick={logoutHandle}>Logout</button>}
    </>
  );
};

export default Profile;
