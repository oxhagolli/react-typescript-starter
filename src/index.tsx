import React from "react";
import ReactDOM from "react-dom";

import Example from "./example";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Example name="Orens" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
