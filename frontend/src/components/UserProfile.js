import React from "react";

// A component to view an authenticated user's profile information. display that a 
const UserProfile = props => {
  return (
    <>
      <div className="container mt-3">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User Profile</h5>
                <p className="card-text">
                  Name: {props.user.firstName} {props.user.lastName}
                </p>
                <p className="card-text">Username: {props.user.username}</p>
                <p>Email: {props.user.email}</p>
                <p>
                  Account created:{" "}
                  {new Date(props.user.lastModifiedDate).toLocaleString()}
                </p>
                <p>
                  Last modified:{" "}
                  {new Date(props.user.lastModifiedDate).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
