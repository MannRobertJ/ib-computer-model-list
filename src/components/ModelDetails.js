import * as React from "react";

export default function ModelPage(props) {
  return (
    <div>
      <ul>
        <li>
          Name: {props.model.name} <br />
          Manufacturer: {props.model.manufacturer} <br />
          Year: {props.model.year} <br />
          Origin: {props.model.origin}
        </li>
      </ul>
    </div>
  );
}
