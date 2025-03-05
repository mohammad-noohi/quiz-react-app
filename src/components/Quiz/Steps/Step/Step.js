import "./Step.css";
import React from "react";

class Step extends React.Component {
  render() {
    return <span className={`step ${this.props.questionNumber === this.props.index ? "step--active" : ""}`}>{this.props.index + 1}</span>;
  }
}

/* 

1. id
2. questionNumber
3. index

*/

export default Step;
