import React from "react";
import "./styles.css";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      error: ""
    };
  }
  componentDidMount = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        this.setState({
          response: res.data
        });
      })
      .catch((error) => {
        this.setState({
          error: error
        });
      });
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.response.map((response) => (
            <li>{response.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
