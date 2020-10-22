import React from "react";

class TextBox extends React.Component {
  render() {
    return (
      <div>
        <input type={this.props.type} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default TextBox;
