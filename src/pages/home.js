import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap"
import { ModalContext } from "../contexts/modalContext";
import { UserContext } from "../contexts/userContext";

import Card from "../components/card"
import Hero from "../components/hero"

const Home = () => {
    const [{ isLogin }] = useContext(UserContext);
    const [, dispatchModal] = useContext(ModalContext);
    const router = useHistory();
    const goToDetailPage = () => {
      if (isLogin) {
        router.push(`/donate/1`);
      } else {
        dispatchModal({
          type: 'SHOW_LOGIN_MODAL'
        })
      }
    };
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
              nominal="Rp. 25.000.000"
              buttonName="Donate"
              buttonOnClick={goToDetailPage}
            />
          </Col>
          <Col>
            <Card
              img="/fund2.jpg"
              title="Empowering Communities Ending Poverty"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={50}
              nominal="Rp. 50.000.000"
              buttonName="Donate"
              buttonOnClick={goToDetailPage}
            />
          </Col>
          <Col>
            <Card
              img="/fund3.jpg"
              title="Please our brothers in flores"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={75}
              nominal="Rp. 100.000.000"
              buttonName="Donate"
              buttonOnClick={goToDetailPage}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
