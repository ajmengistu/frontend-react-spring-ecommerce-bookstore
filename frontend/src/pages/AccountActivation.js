import React, { useEffect, useState } from "react";
import UserAPI from "../api/UserAPI";
import FormInputSuccess from "../components/FormInputSuccess";
import FormInputError from "../components/FormInputError";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// An account activation page to handle account activation. A user receives an account
// activation link with a key that will expire after 24 hours.
const AccountActivation = props => {
  const [isAccountActivated, setIsAccountActivated] = useState(false);
  const [message, setMessage] = useState("");

  const activationTokenKey = props.match.params.key;

  useEffect(() => {
    const handleAccountActivation = async () => {
      const response = await UserAPI.activateAccount(activationTokenKey);

      if (response.data) {
        setIsAccountActivated(true);
        setMessage("You are account has been successfully activated!");
      } else {
        setMessage(response.error.response.data.message);
      }
    };
    handleAccountActivation();
  }, [activationTokenKey]);

  return (
    <>
      <div className="container mt-4">
        {isAccountActivated ? (
          <FormInputSuccess successMessage={message} />
        ) : (
          <div>
            <div>
              <FormInputError type="warning" errorMessage={message} />
              <div className="ml-2">
                <Link to="/signup"> Create an account</Link> or
                <Link to="/signin"> Sign in.</Link>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default AccountActivation;
