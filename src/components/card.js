import { Card, ProgressBar } from "react-bootstrap"

const CardComponent = ({ img, title, text, progress, nominal, buttonName, buttonOnClick }) => {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="card-title cursor-pointer" onClick={buttonOnClick}>{title}</Card.Title>
        <Card.Text className="card-text">
          {text}
        </Card.Text>
        <ProgressBar now={progress} />
        <div className="footer-card">
          <div>{nominal}</div>
          <button className="btn btn-card-donate" onClick={buttonOnClick}>{buttonName}</button>
        </div>
      </Card.Body>
    </Card>
    
  )
}

export default CardComponent
