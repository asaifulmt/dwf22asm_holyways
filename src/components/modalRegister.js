import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

const ModalRegister = ({ isVisible, onHide, showModalLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname: ''
  })

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value  })
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  const onClickLogin = () => {
    onHide()
    showModalLogin()
  }

  return (
    <Modal centered show={isVisible} onHide={onHide}>
      <Modal.Body className="container-modal">
        <div className="title-modal">
          Register
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control name="email" onChange={e => onChange(e)} type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control name="password" onChange={e => onChange(e)} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicFullname">
            <Form.Control name="fullname" onChange={e => onChange(e)} placeholder="Full Name" />
          </Form.Group>
          <Button onClick={e => onSubmit(e)} className="btn-modal" variant="primary" type="submit" block>
            Register
          </Button>
        </Form>
        <div className="footer-modal">
          Already have an account ? Click&nbsp;<u className="cursor-pointer" onClick={onClickLogin}>Here</u>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalRegister
