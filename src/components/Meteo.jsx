import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Home from "./Home";
import MyCard from "./MyCard";
import DayWeather from "./DayWeather";
import { useState } from "react";

const key = "e546e7f2074d9e0c2509db589789d3b7";
const weatherApi = `http://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=metric&cnt=4&lang=IT&`;
const geoLocationApi = `http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${key}&q=`;

const Meteo = () => {
  const [city, setCity] = useState("");
  const [meteoData, setMeteoData] = useState([]);

  const onFormSubmit = evt => {
    evt.preventDefault();
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
      <Form onSubmit={onFormSubmit} className={"mb-3"}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Scrivi la città</Form.Label>
          <Form.Control
            value={city}
            type="text"
            placeholder="Città, paese"
            onChange={evt => {
              setCity(evt.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Mostra il meteo
        </Button>
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
