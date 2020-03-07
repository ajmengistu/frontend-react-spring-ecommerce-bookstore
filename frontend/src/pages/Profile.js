import React, { useEffect, useState } from "react";
import UserAPI from "../api/UserAPI";
import Loading from "../components/Loading";
import UserProfile from "../components/UserProfile";

// An authenticated user profile page.
const Profile = props => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setIsLoading(true);
      const response = await UserAPI.getUserAccount();
      setIsLoading(false);
      const profile = await response.data.data;
      setUserProfile(profile);
      console.log(profile);
    };
    fetchUserProfile();
  }, []);

  return (
    <>
      <div className="container">{isLoading && <Loading />}</div>
      {userProfile && <UserProfile user={userProfile} />}
    </>
  );
};

export default Profile;
