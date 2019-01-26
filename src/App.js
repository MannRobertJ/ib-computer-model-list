import React, { Component } from "react";
import "./App.css";
import SelectModel from "./components/SelectModel";

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
    }
  };

  render = () => {
    return (
      <div className="App">
        <SelectModel data={this.state.data} />
      </div>
    );
  };
}

export default App;
