import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './nav.css';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-main">
        <Navbar.Brand href="/">No-Cheating Trivia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact /* className="inactive-nav" */ activeClassName="active-nav" to="/">Home</NavLink>
            <a href="https://github.com/shivamjjha" target="_blank" rel="noreferrer">GitHub</a>
            <NavLink exact activeClassName="active-nav" to="/feedback">Give Feedback</NavLink>
            <NavLink exact activeClassName="active-nav" to="/nav">Nav</NavLink>
            <NavLink exact activeClassName="active-nav" to="/test">Test</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
