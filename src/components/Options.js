import React from "react"
import Option from "./Option"

const Options = props => (
  <div>
    {props.options.length === 0 && <p>Please add an option to get started</p>}
    {
      props.options.map(opt => (
        <Option 
          key={opt} 
          optionText={opt}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
    <button onClick={props.handleDeleteOptions}>Remove All Options</button>
  </div>
)

export default Options