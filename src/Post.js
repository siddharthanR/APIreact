import React from "react";
import TextBox from "../src/Components/TextBox";
import Button from "../src/Components/Button";
import Axios from "axios";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  onInputChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };
  onHandleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.value
    };
    Axios.post(`https://jsonplaceholder.typicode.com/users`, { user }).then(
      (response) => {
        console.log(response.data);
      }
    );
  };
  render() {
    return (
      <div>
        <TextBox
          type="text"
          placeholder="Input"
          onChange={this.onInputChange}
        />
        <Button type="submit" onClick={this.onHandleSubmit} />
      </div>
    );
  }
}

export default Post;
