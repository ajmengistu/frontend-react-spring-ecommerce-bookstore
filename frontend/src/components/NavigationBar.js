import React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = props => {
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
            <Form.Group className="mb-0 mr-2 w-50">
              <Form.Control type="text" placeholder="Search" />
            </Form.Group>
            <Nav>
              <Nav.Link href="#link">Notifications</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                {/* <NavDropdown.Item>Action</NavDropdown.Item> */}
                <p className="ml-4">
                  <b> John Doe</b>
                </p>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Groups</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Comments</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Discussions
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/signout">
                  Account Settings
                </NavDropdown.Item>
                <NavDropdown.Item href="/signout">Sign out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default NavigationBar;
