import "./Answer.css";
import React from "react";

// اینو دیگه بلد نیستم فعلا

class Answers extends React.Component {
  answerHanlder(isCorrect) {
    this.props.onAnswerToQuestion(isCorrect);
  }

  render() {
    return (
      <div className="answers">
        {this.props.answersData.map(answer => {
          return (
            <div key={answer.id} className="answer" onClick={this.answerHanlder.bind(this, answer.isCorrect)}>
              {answer.text}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Answers;
