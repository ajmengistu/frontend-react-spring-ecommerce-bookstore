import React, { useEffect, useState } from "react";
import { getUserAccount } from "../api/UserAPI";
import Loading from "../components/Loading";

// An authenticated user profile page.
const Profile = props => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setIsLoading(true);
      const response = await getUserAccount();
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
      {userProfile && (
        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">User Profile</h5>
                  <p className="card-text">
                    Name: {userProfile.firstName} {userProfile.lastName}
                  </p>
                  <p className="card-text">Username: {userProfile.username}</p>
                  <p>Email: {userProfile.email}</p>
                  <p>Account created: {userProfile.createdDate}</p>
                  <p>Last modified: {userProfile.lastModifiedDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
