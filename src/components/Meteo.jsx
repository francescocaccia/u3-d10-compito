import { Container, Form, Button, Row, Col } from "react-bootstrap";
import MyCard from "./MyCard";
import { useState } from "react";
const key = "e546e7f2074d9e0c2509db589789d3b7";
const weatherApi = `http://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=metric&cnt=9&lang=IT&`;
const geoLocationApi = `http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${key}&q=`;

const Meteo = () => {
  const [city, setCity] = useState("");
  const [meteoData, setMeteoData] = useState([]);

  const onFormSubmit = e => {
    e.preventDefault();
    const getCity = async () => {
      const rawData = await fetch(geoLocationApi + city);
      const data = await rawData.json();
      return {
        lat: data[0].lat,
        lon: data[0].lon,
      };
    };
    const getWeather = async ({ lat, lon }) => {
      const rawData = await fetch(weatherApi + `lat=${lat}&lon=${lon}`);
      const data = await rawData.json();
      const forecast = data.list;
      setMeteoData(forecast);
      return data;
    };

    getCity().then(latLon => {
      getWeather(latLon);
    });
  };
  return (
    <Container fluid>
      <Form onSubmit={onFormSubmit} className="mb-3 d-flex">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold fs-3">Scrivi la città per scoprire il meteo</Form.Label>
          <Form.Control
            value={city}
            type="text"
            placeholder="Città, paese"
            onChange={e => {
              setCity(e.target.value);
            }}
          />
        </Form.Group>
        <div>
          <Button className="mt-5 mx-3" variant="primary" type="submit">
            Mostra il meteo
          </Button>
        </div>
      </Form>
      <Row>
        {meteoData.map(met => (
          <Col key={met.dt}>
            <MyCard meteo={met} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Meteo;
