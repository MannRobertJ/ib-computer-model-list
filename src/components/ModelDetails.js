import * as React from "react";
import PropTypes from "prop-types";

export default function ModelDetails(props) {
    const model = props.model
  return (
    <div>
      <ul>
        <li>Name: {model.name} </li>
        <li>Manufacturer: {model.manufacturer}</li>
        <li>Year: {model.year} </li>
        <li>Origin: {model.origin}</li>
      </ul>
    </div>
  );
}


ModelDetails.propTypes = {
  model: PropTypes.shape({
      name: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      manufacturer: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired
    })
};
