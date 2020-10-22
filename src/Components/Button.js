import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
        <input type={this.props.type} onClick={this.props.onClick} />
      </div>
    );
  }
}

export default Button;
