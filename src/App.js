import React, { Component } from "react";
import "./App.css";
import SelectModel from "./components/SelectModel";
import {connect} from 'react-redux'

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

  addModel = (manufacturer, year, origin) => {
    return {
      type: "ADD_MODEL",
      payload: {
        manufacturer: manufacturer,
        year: year,
        origin: origin
      }
    };
  };

  updateSelection = event => {
    const model = this.state.data[event.target.value]
    this.setState({ selectedModel: model });
    this.props.dispatch(this.addModel(model));
  };

  render = () => {
    return (
      <div className="App">
        <SelectModel
          data={this.state.data}
          handleChange={this.updateSelection}
          selectedModel={this.selectedModel}
        />
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {selectedModels: state}
}

export default connect(mapStateToProps)(App)
