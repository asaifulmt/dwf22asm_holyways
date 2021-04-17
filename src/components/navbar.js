import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap"
import { ModalContext } from "../contexts/modalContext";
import { UserContext } from "../contexts/userContext";

const NavbarComponent = ({ onClickLogin, onClickRegister }) => {
  const [{ isLogin }] = useContext(UserContext);
  const [, dispatch] = useContext(ModalContext);
  return (
    <Navbar variant="dark" className="navbar-container" expand="lg">
      <Navbar.Brand href="#home">
        <img src="/Icon.svg" alt="icon-holyways" className="icon" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        {
          isLogin ? (
            <img src="/profile-navbar.svg" alt="profile" />
          ) : (
            <>
              <button className="btn btn-login" onClick={() => dispatch({ type: 'SHOW_LOGIN_MODAL' })}>Login</button>
              <button className="btn btn-register" onClick={() => dispatch({ type: 'SHOW_REGISTER_MODAL' })}>Register</button>
            </>
          )
        }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
