import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Row className="mt-2">
      <Col className="d-flex justify-content-center">
        <Button
          onClick={() => {
            navigate("/");
          }}
          variant="outline-primary"
        >
          Home
        </Button>
      </Col>
    </Row>
  );
};
export default Home;
