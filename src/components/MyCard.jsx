import { Container } from "react-bootstrap";

const MyCard = ({ meteo }) => {
  return (
    <div className="card mb-3" style={{ width: "250px", position: "relative" }}>
      <img
        src={`http://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`}
        className="card-img-top"
        alt="Weather"
      />
      <h2 className="card-text" style={{ position: "absolute", top: "15px", left: "15px" }}>
        {meteo.main.temp}°
      </h2>
      <div className="card-body">
        <small className="card-title">{meteo.dt_txt}</small>
        <h3 className="card-text" style={{ textTransform: "capitalize" }}>
          {meteo.weather[0].description}
        </h3>
      </div>
    </div>
  );
};
export default MyCard;
