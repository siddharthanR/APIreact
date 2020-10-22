import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  onInputChange = (event) => {};

  render() {
    return (
      <div>
        <TextBox />
        <Button />
      </div>
    );
  }
}

export default Post;
