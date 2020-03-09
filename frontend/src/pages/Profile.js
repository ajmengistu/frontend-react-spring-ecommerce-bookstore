import React, { useEffect, useState } from "react";
import UserAPI from "../api/UserAPI";
import Loading from "../components/Loading";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";

// An authenticated user profile page.
const Profile = props => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updateProfile, setUpdateProfile] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const profile = userProfile;

    if (updateProfile.username === "") {
      setUpdateProfile((updateProfile.username = profile.username));
    }
    if (updateProfile.email === "") {
      setUpdateProfile((updateProfile.email = profile.email));
    }
    if (updateProfile.firstName === "") {
      setUpdateProfile((updateProfile.firstName = profile.firstName));
    }
    if (updateProfile.lastName === "") {
      setUpdateProfile((updateProfile.lastName = profile.lastName));
    }

    setIsLoading(true);
    await UserAPI.updateUserAccount(updateProfile);
    setIsLoading(false);

    setIsLoading(true);
    const resp = await UserAPI.getUserAccount();
    setIsLoading(false);
    const prof = await resp.data.data;

    const userInfo = {
      username: prof.username,
      email: prof.email,
      firstName: prof.firstName,
      lastName: prof.lastName
    };

    setUpdateProfile({ ...userInfo });
    setUserProfile({ ...prof });
  };

  const handleChange = event => {
    setUpdateProfile({
      ...updateProfile,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      setIsLoading(true);
      const response = await UserAPI.getUserAccount();
      setIsLoading(false);
      const profile = await response.data.data;

      const updateProfileInfo = {
        username: profile.username,
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName
      };

      setUpdateProfile(updateProfileInfo);
      setUserProfile(profile);
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <div className="container">{isLoading && <Loading />}</div>
      {userProfile && (
        <UserProfile
          user={userProfile}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
      <Footer />
    </>
  );
};

export default Profile;
