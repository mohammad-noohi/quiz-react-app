import "./Answer.css";
import React from "react";

// اینو دیگه بلد نیستم فعلا

class Answers extends React.Component {
  render() {
    return (
      <div className="answers">
        {this.props.answers.map(answer => {
          return (
            <div key={answer.id} className="answer" onClick={this.answerHandler.bind(this, answer.isCorrect)}>
              {answer.text}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Answers;
