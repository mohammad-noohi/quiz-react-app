import Step from "./Step/Step";
import "./Steps.css";
import React from "react";

class Steps extends React.Component {
  render() {
    return (
      <div className="steps">
        {this.props.questions.map((question, index) => {
          return <Step key={question.id} questionNumber={this.props.questionNumber} index={index} />;
        })}
      </div>
    );
  }
}

export default Steps;
