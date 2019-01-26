import React from "react";

export default class SelectModel extends React.Component {
  // The homework says "Also, the value of the <select> element should be read from the local state."
  // So I put the selectedModel in the SelectModel state. I'm not sure if that is what was wanted.

  state = { selectedModel: this.props.selectedModel };

  render() {
    return (
      <form
        value={this.state.selectedModel}
        onChange={this.props.handleChange}
        onSubmit={this.props.handleSubmit}
      >
        <select>
          <option value=""> -- pick a model </option>
          {Object.keys(this.props.data).map(name => (
            <option value={name} key={name}>
              {name} ({this.props.data[name].year})
            </option>
          ))}
        </select>
        <button type="submit" value="submit">
          add model
        </button>
      </form>
    );
  }
}
