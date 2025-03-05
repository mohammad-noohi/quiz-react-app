import React from "react";
import "./Question.css";

class Question extends React.Component {
  render() {
    return <h3 className="question-title">{this.props.question}</h3>;
  }
}

export default Question;
