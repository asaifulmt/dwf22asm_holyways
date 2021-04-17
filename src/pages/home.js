import { Col, Container, Row } from "react-bootstrap"
import Card from "../components/card"
import Hero from "../components/hero"

const Home = () => {
  return (
    <>
      <Hero />
      <Container style={{ marginTop: '165px', marginBottom: '57px' }}>
        <Row>
          <Col>
            <Card
              img="/fund.jpg"
              title="The Strength of a People. Power of Community"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={35}
            />
          </Col>
          <Col>
            <Card
              img="/fund2.jpg"
              title="Empowering Communities Ending Poverty"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={50}
            />
          </Col>
          <Col>
            <Card
              img="/fund3.jpg"
              title="Please our brothers in flores"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={75}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
