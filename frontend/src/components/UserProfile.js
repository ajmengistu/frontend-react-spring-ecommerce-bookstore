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
                <form
                  method="POST"
                  className="form"
                  autoComplete="off"
                  id="updateProfile"
                  noValidate=""
                  onSubmit={e => props.handleSubmit(e)}
                >
                  <div className="form-group row">
                    <label className="col-sm-4">Username:</label>
                    <div className="col-sm-8">{props.user.username}</div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label col-form-label">
                      Email
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control"
                        placeholder={props.user.email}
                        onChange={e => props.handleChange(e)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label col-form-label">
                      First Name:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control form-control"
                        placeholder={props.user.firstName}
                        onChange={e => props.handleChange(e)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label col-form-label">
                      Last Name:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control form-control"
                        placeholder={props.user.lastName}
                        onChange={e => props.handleChange(e)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-4">Account created: </label>
                    <div className="col-sm-8">
                      {new Date(props.user.lastModifiedDate).toLocaleString()}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-4">Last modified: </label>
                    <div className="col-sm-8">
                      {new Date(props.user.lastModifiedDate).toLocaleString()}
                    </div>
                  </div>

                  <button className="mt-2 btn btn-lg btn-primary">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
