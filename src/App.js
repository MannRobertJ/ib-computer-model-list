import React, { Component } from "react";
import "./App.css";

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
        <select>
          <option value=""> -- pick a model </option>
          {Object.keys(this.state.data).map(name => (
            <option value={name}>{`${name} (${this.state.data[name].year})`}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default App;
