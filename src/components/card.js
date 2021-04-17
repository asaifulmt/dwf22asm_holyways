import { useContext } from "react";
import { Card, ProgressBar } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { ModalContext } from "../contexts/modalContext";
import { UserContext } from "../contexts/userContext";

const CardComponent = ({ img, title, text, progress }) => {
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
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="card-title cursor-pointer" onClick={goToDetailPage}>{title}</Card.Title>
        <Card.Text className="card-text">
          {text}
        </Card.Text>
        <ProgressBar now={progress} />
        <div className="footer-card">
          <div>Rp.100.000.000</div>
          <button className="btn btn-card-donate" onClick={goToDetailPage}>Donate</button>
        </div>
      </Card.Body>
    </Card>
    
  )
}

export default CardComponent
