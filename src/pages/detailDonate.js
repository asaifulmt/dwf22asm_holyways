import { useState } from "react"
import { Col, Container, Row, ProgressBar, Card } from "react-bootstrap"
import ModalDonate from "../components/modalDonate"

const fakeData = [
  {
    name: 'Andi',
    date: '2021-04-11T17:00:00.000Z',
    total: '45000'
  },
  {
    name: 'Jamal',
    date: '2021-04-11T17:00:00.000Z',
    total: '45000'
  },
  {
    name: 'Udin',
    date: '2021-04-11T17:00:00.000Z',
    total: '45000'
  }
]

const DetailDonate = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  return (
    <>
      <Container style={{ marginTop: '79px'}}>
        <Row>
          <Col md={5}>
            <img className="image-detail-donate" src="/fund.jpg" alt="img-detail" />
          </Col>
          <Col md={{ span: 5, offset: 2 }}>
            <div className="detail-title">
              The Strength of a People. Power of Community
            </div>
            <div className="detail-donate-container">
              <div className="raised-fund-text-container">
                <p className="gathered-text primary-color">Rp.25.000.000</p>
                gathered from
                <p className="gathered-text">Rp.200.000.000</p>
              </div>
              <ProgressBar className="mt-2" now={30} />
              <div className="d-flex justify-content-between mt-2">
                <p><b className="gathered-text">200</b> Donation</p>
                <p><b className="gathered-text">150</b> More Day</p>
              </div>
              <div className="desc-detail-text mt-3 mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </div>
              <button className="btn-fullwidth btn-donate" onClick={() => setIsVisibleModal(true)}>Donate</button>
            </div>
          </Col>
        </Row>
        <div className="detail-title mt-5">
          List Donation (200)
        </div>
        <div className="mt-4">
          {
            fakeData.map(({ name, date, total }) => (
              <Card className="mb-3">
                <Card.Body>
                  <p><b>{name}</b></p>
                  <p>{new Date(date).toDateString()}</p>
                  <p className="primary-color">Total: Rp.{total}</p>
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </Container>
      <ModalDonate isVisible={isVisibleModal} onHide={() => setIsVisibleModal(false)} />
    </>
  )
}

export default DetailDonate
