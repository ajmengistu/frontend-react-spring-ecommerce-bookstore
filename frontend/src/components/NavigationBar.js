import React, { useState } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import {
  isUserAuthenticated,
  signOutUser
} from "../utils/AuthenticationService";

const NavigationBar = props => {
  const [, setHasUserSignedOut] = useState(false);

  const handleSignOut = () => {
    signOutUser();
    setHasUserSignedOut(true);
    props.history.push("/");
  };

  return (
    <>
      <Container>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="/">Bookstore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#link">Bookshelf</Nav.Link>
              <Nav.Link href="/">Community</Nav.Link>
              <NavDropdown title="Browse" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Lists</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  News & Interviews
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Recommendations
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form.Group className="mb-0 mr-1 w-50">
              <Form.Control type="text" placeholder="Search" />
            </Form.Group>
            <Nav>
              <Nav.Link href="#link">
                {/* Notifications <span style={{ color: "white" }}>(3)</span> */}
                Notifications
              </Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                {/* {isUserAuthenticated() ? (
                  <div>
                    <b className="ml-4">
                      John Stone
                      {props.accountUser.firstName} {props.accountUser.lastName}
                    </b>
                    <NavDropdown.Divider />
                  </div>
                ) : (
                  <div></div>
                )} */}
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Groups</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Comments</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Discussions
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/account/settings">Account Settings</NavDropdown.Item>
                {isUserAuthenticated() ? (
                  <NavDropdown.Item onClick={() => handleSignOut()}>
                    Sign out
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/signin">Sign in</NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default withRouter(NavigationBar);
