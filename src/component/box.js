import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div >
        <div>
          <button
            onClick={() => {
            this.props.handleClick()
          }}>{this.props.title}</button>
        </div>
      </div>
    )
  }
}

export default Box;