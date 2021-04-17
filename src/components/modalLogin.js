import { useContext, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { ModalContext } from "../contexts/modalContext";
import { UserContext } from "../contexts/userContext";

const ModalLogin = () => {
  const [, dispatch] = useContext(UserContext);
  const [{ isVisibleLogin }, dispatchModal] = useContext(ModalContext);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value  })
  }

  const onSubmit = e => {
    e.preventDefault()
    dispatchModal({
      type: 'HIDE_LOGIN_MODAL'
    })
    dispatch({
      type: "LOGIN",
    });
  }

  const onClickRegister = () => {
    dispatchModal({
      type: 'SHOW_REGISTER_MODAL'
    })
  }

  return (
    <Modal centered show={isVisibleLogin} onHide={() => dispatchModal({ type: 'HIDE_LOGIN_MODAL' })}>
      <Modal.Body className="container-modal">
        <div className="title-modal">
          Login
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control name="email" onChange={e => onChange(e)} type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control name="password" onChange={e => onChange(e)} type="password" placeholder="Password" />
          </Form.Group>
          <Button onClick={e => onSubmit(e)} className="btn-modal" variant="primary" type="submit" block>
            Login
          </Button>
        </Form>
        <div className="footer-modal">
          Don't have an account ? Click&nbsp;<u className="cursor-pointer" onClick={onClickRegister}>Here</u>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalLogin
