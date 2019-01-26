import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import ModelDetailsContainer from "./components/ModelDetailsContainer";

class App extends Component {
  state = {
    data: {
      "Ivel Z3": {
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      "Bally Astrocade": {
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      "Sord M200 Smart Home Computer": {
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      "Commodore 64": {
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    },
    selectedModel: {}
  };

  addModel = (name, manufacturer, year, origin) => {
    return {
      type: "ADD_MODEL",
      payload: {
        name: name,
        manufacturer: manufacturer,
        year: year,
        origin: origin
      }
    };
  };

  updateSelection = event => {
    const name = event.target.value;
    const model = this.state.data[name];
    this.setState({ selectedModel: { ...model, name: name } });
  };

  clickButton = event => {
    event.preventDefault();
    const model = this.state.selectedModel;
    if (model.name && model.year && model.manufacturer && model.origin) {
      this.props.dispatch(
        this.addModel(model.name, model.manufacturer, model.year, model.origin)
      );
    }
  };

  render = () => {
    return (
      <div className="App">
        <ModelDetailsContainer />

        <SelectModel
          data={this.state.data}
          handleChange={this.updateSelection}
          handleSubmit={this.clickButton}
        />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return { selectedModels: state };
};

export default connect(mapStateToProps)(App);


// I would normally have put this in its own file, but since the homework instructions say first not to write as a module, then to make it a controlled component, I assumed it was meant to be written here as its own component. 
class SelectModel extends Component {
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
