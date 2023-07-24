import React from "react";

const CardData = props => {
  const [data, ora] = props.data.split(" ");
  const [anno, mese, giorno] = data.split("-");
  const [ore, minuti, secondi] = ora.split(":");
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-0 fs-5">
      <p className="m-0">giorno: {giorno}/{mese}</p> <p className="m-0">ore: {ore}:{minuti}</p>
    </div>
  );
};

export default CardData;
