import React, { useState } from "react";
import UpdatePassword from "../components/UpdatePassword";
import UserAPI from "../api/UserAPI";
import Footer from "../components/Footer";

// Account settings page so a user can update their password.
const AccountSettings = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [updateForm, setUpdateForm] = useState({
    currentPassword: "",
    newPassword: "",
    newPassword2: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (updateForm.newPassword.length < 6) {
      setErrorMessage("New password must be at least 6 characters.");
      return;
    }
    if (
      updateForm.newPassword.toLowerCase() !==
      updateForm.newPassword2.toLowerCase()
    ) {
      setErrorMessage("Password does not match");
      return;
    }

    const response = await UserAPI.updateUserPassword({
      currentPassword: updateForm.currentPassword,
      newPassword: updateForm.newPassword
    });

    if (response.error) {
      setErrorMessage(response.error.response.data.message);
    } else if (response.data) {
      setUpdateForm({
        currentPassword: "",
        newPassword: "",
        newPassword2: ""
      });

      setSuccessMessage("Your password was updated successfully!");
    }
  };

  const handleChange = event => {
    setUpdateForm({ ...updateForm, [event.target.name]: event.target.value });
  };

  return (
    <>
      <UpdatePassword
        errorMessage={errorMessage}
        currentPassword={updateForm.currentPassword}
        newPassword={updateForm.newPassword}
        newPassword2={updateForm.newPassword2}
        successMessage={successMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
};

export default AccountSettings;
