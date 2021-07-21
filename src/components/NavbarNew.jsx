import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./../layout.css";

const NavbarNew = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm md" bg="" className="NavItem" variant="dark">
        <Navbar.Brand href="#home" className="brand">
          <h2>Covid-19 Update</h2>
          <span>Stay Home Stay Safe</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navItem">
            <Nav.Link href="#deets" className="text-white items">
              <NavLink exact activeClassName="activeNav" to='./covid-19-update'>
              Home
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#memes" className="text-white items">
              <NavLink exact  to='./covid-19-update/asia' activeClassName="activeNav">
                Asia
              </NavLink>
              
            </Nav.Link>
            <Nav.Link href="#memes" className="text-white items">
              Europe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavbarNew;
