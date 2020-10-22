import React from "react";
import TextBox from "../src/Components/TextBox";
import Button from "../src/Components/Button";
import Axios from "axios";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }
  onInputChange = (event) => {
    this.setState({
      id: event.target.id
    });
  };
  onHandleSubmit = (event) => {
    event.preventDefault();
    Axios.delete(
      `https://jsonplaceholder.typicode.com/users/${this.state.id}`
    ).then((response) => {
      console.log(response.data);
    });
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

export default Delete;
