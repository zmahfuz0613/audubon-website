import React from 'react';
import { Route, Link, Redirect } from "react-router-dom"
import Home from '../Home';
import CreateBird from '../Bird/CreateBird';
import ShowBird from '../Bird/ShowBird';
import {Navbar, Nav} from 'react-bootstrap';
const Header = () => {
    return(
      <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand>  <Link className="navbar-brand" to="/home">Audubon Society</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link"to="/home">Home</Link>
      <Link className="nav-link" to="/createBird">Create new bird</Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        <Route
              exact
              path="/"
              render={() => {
                  return (                      
                    <Redirect to="/home" />                 
                  )
              }}
            />
        <Route path='/home' component={Home} />
        <Route path='/createBird' component={CreateBird} />
        <Route path='/showBird/:id' component={ShowBird} />
        </>
    )
}

export default Header;