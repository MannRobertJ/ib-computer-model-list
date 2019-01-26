import React from "react";

export default class SelectModel extends React.Component {
  render() {
    return (
      <select onChange={this.props.handleSubmit}>
        <option value=""> -- pick a model </option>
        {Object.keys(this.props.data).map(name => (
          <option value={name} key={name}>
            {name} ({this.props.data[name].year})
          </option>
        ))}
      </select>
    );
  }
}
