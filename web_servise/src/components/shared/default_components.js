import React from 'react'

// NOTE example
// { attributes.map((attribute, index) =>
//   <InputField
//     key={index}
//     onChange={this.handleSetState.bind(this)}
//     onKeyPress={ this.handleOnKeyPress.bind(this) }
//     name={attribute}
//     value={ OBJECT[attribute] }
//   />
// )}

export const InputField = (props) => {
  return (
    <div className="form-group row">
      <div className="col-md-12">
        <div className="input-group">
          <span className="input-group-addon">{ props.name }</span>
          <input
            className="form-control"
            name={ props.name }
            placeholder={ props.name }
            onChange={ props.onChange }
            onKeyPress={props.onKeyPress}
            value={ props.value || "" }
          />
        </div>
      </div>
    </div>
  )
}
