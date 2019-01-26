import React from "react";

export default class SelectModel extends React.Component {
  // I put the selectedModel in the SelectModel state because of the sentence, "Also, the value of the <select> element should be read from the local state."
  // I'm not sure if that is what was wanted or not.

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
