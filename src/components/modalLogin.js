import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

const ModalLogin = ({ isVisible, onHide, showModalRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value  })
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  const onClickRegister = () => {
    onHide()
    showModalRegister()
  }

  return (
    <Modal centered show={isVisible} onHide={onHide}>
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
