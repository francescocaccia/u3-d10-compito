import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

const DayWeather = () => {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>
          <div className="d-flex just align-flex-item justify-content-between">
            <img src="https://www.pngmart.com/files/3/Weather-PNG-HD.png" alt="Weather" />
            <p>oggi</p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default DayWeather;
