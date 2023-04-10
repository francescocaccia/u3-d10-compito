import React from "react";

const CardData = props => {
  const [data, ora] = props.data.split(" ");
  const [anno, mese, giorno] = data.split("-");
  const [ore, minuti, secondi] = ora.split(":");
  return (
    <p className="d-flex justify-content-between">
      <span>
        {giorno}/{mese}
      </span>
      <span>
        {ore}:{minuti}
      </span>
    </p>
  );
};

export default CardData;
