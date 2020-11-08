import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProfileView = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  return (
    <div className="my-5">
      <h1 className="my-5">Username</h1>

      <h1 className="my-5">My Favorite Cards</h1>
    </div>
  );
};

export default ProfileView;
