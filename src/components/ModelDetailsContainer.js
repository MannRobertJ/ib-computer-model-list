import React, { Component } from "react";
import { connect } from "react-redux";
import ModelDetails from "./ModelDetails";

class ModelDetailsContainer extends Component {
    render () {
        return ( <div>
            {this.props.selectedModels.map((model, index) => {
                return <ModelDetails key={index} model={model} />;
              })}
              </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {selectedModels: state}
}

export default connect(mapStateToProps)(ModelDetailsContainer)
