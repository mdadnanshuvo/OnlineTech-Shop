import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from '../context/shop-context';
import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';

export const NavBar = () => {

  const {cartItems} = useContext(ShopContext);
  console.log(cartItems.length);
  const totalCartItems = Object.values(cartItems).reduce((a,b) => a+b,0);

  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/' >MyTech Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link to="/" className="nav-link fw-bolder">SHOP</Link>
          <Link to="/cart" className="nav-link"><ShoppingCart size={35}/> <Badge bg="info">{totalCartItems > 0 && <>{totalCartItems}</>}</Badge> </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  

  )
}
