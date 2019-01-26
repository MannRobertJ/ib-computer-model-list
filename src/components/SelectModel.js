import React from 'react'

export default class SelectModel extends React.Component {
    render() {
        return <select>
        <option value=""> -- pick a model </option>
        {Object.keys(this.props.data).map(name => (
          <option value={name}>
            {name} ({this.props.data[name].year})
          </option>
        ))}
      </select>
    }
}  
