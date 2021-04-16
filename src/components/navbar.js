import { Nav, Navbar } from "react-bootstrap"

const NavbarComponent = ({ onClickLogin, onClickRegister }) => {
  return (
    <Navbar variant="dark" className="navbar-container" expand="lg">
      <Navbar.Brand href="#home">
        <img src="/Icon.svg" alt="icon-holyways" className="icon" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <button className="btn btn-login" onClick={onClickLogin}>Login</button>
          <button className="btn btn-register" onClick={onClickRegister}>Register</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
