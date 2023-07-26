import { ListGroupItem } from "react-bootstrap";
import CardData from "./CardData";
import { LiaTemperatureHighSolid } from "react-icons/lia";


const MyCard = ({ meteo, city }) => {
  return (
    <>
      <ListGroupItem className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-transparent">
        <div className="col-md-4 mb-3 mb-md-0">
          <p className="fs-5">
            Temperatura: <LiaTemperatureHighSolid /> {meteo.main.temp}°
          </p>
        </div>
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <div className="fw-semi-bold fs-3">
            <CardData data={meteo.dt_txt} />
          </div>
        </div>
        <div className="col-md-4 text-end">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={`http://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`}
              width={50}
              height={50}
              alt="Weather"
            />
            <p className="m-0" style={{ textTransform: "capitalize" }}>
              {meteo.weather[0].description}
            </p>
          </div>
        </div>
      </ListGroupItem>
    </>
  );
};
export default MyCard;
