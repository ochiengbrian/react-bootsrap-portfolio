import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Container fluid>
    <ReactBootStrap.Navbar.Brand href="#">Navbar scroll</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
    <ReactBootStrap.Navbar.Collapse id="navbarScroll">
      <ReactBootStrap.Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <ReactBootStrap.Nav.Link href="#action1">Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#action2">Link</ReactBootStrap.Nav.Link>

        <ReactBootStrap.Nav.Link href="#">Link</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Form className="d-flex">
        <ReactBootStrap.FormControl
          type="search"
          placeholder="Search Here"
          className="me-2"
          aria-label="Search"
        />
        <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
      </ReactBootStrap.Form>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
  )
}

export default navbar