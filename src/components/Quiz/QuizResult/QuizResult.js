import React from "react";
import "./QuizResult.css";

class QuizResult extends React.Component {
  render() {
    return <h3 className="quiz-result">{this.props.score === this.props.questionsCount ? "you are smart !! 🎉🎉" : `you get ${this.props.score} score from ${this.props.questionsCount}`}</h3>;
  }
}

export default QuizResult;
