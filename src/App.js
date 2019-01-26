import React, { Component } from "react";
import "./App.css";
import SelectModel from "./components/SelectModel";
import {connect} from 'react-redux'
import ModelDetails from "./components/ModelDetails";

class App extends Component {
  // 
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
    selectedModel: ""
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
    const name = event.target.value
    const model = this.state.data[name]
    this.setState({ selectedModel: {...model, name: name} });
  };

  clickButton = event => {
    event.preventDefault()
    const model = this.state.selectedModel
    this.props.dispatch(this.addModel(model.name, model.manufacturer, model.year, model.origin))
  }

  render = () => {
    return (
      <div className="App">
        {this.props.selectedModels.map(
          (model, index) => {
            return <ModelDetails key = {index}  model={model} />          
        })}
        <SelectModel
          data={this.state.data}
          handleChange={this.updateSelection}
          handleSubmit={this.clickButton}
        />
      </div>
    );
      }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {selectedModels: state}
}

export default connect(mapStateToProps)(App)
