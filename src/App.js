import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          id: 1,
          questionText: "how many harry patter books are there ?",
          answerOptions: [
            { id: 1, text: "1", isCorrect: false },
            { id: 2, text: "2", isCorrect: false },
            { id: 3, text: "3", isCorrect: true },
            { id: 4, text: "4", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "who is CEO of Tesla ?",
          answerOptions: [
            { id: 5, text: "bill gates", isCorrect: false },
            { id: 6, text: "nikola tesla", isCorrect: false },
            { id: 7, text: "mark zakerberg", isCorrect: false },
            { id: 8, text: "illon mask", isCorrect: true },
          ],
        },
        {
          id: 3,
          questionText: "who create tha apple company ?",
          answerOptions: [
            { id: 1, text: "bill gates", isCorrect: false },
            { id: 9, text: "stive jobs", isCorrect: true },
            { id: 10, text: "linus trovaldes", isCorrect: false },
            { id: 11, text: "illon mask", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "what is capital of france ?",
          answerOptions: [
            { id: 12, text: "london", isCorrect: false },
            { id: 13, text: "new york", isCorrect: false },
            { id: 14, text: "paris", isCorrect: true },
            { id: 15, text: "dublin", isCorrect: true },
          ],
        },
      ],
      score: 0,
      currentQuestion: 0,
      quizFinished: false,
    };
  }

  answerHandler(isCorrectAnswer, e) {
    console.log(e.target);
    if (isCorrectAnswer) {
      this.setState(prevState => {
        return { score: prevState.score + 1 };
      });
    }

    // go to next question
    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState(prevState => {
        return { currentQuestion: prevState.currentQuestion + 1 };
      });
    } else {
      // finish quiz
      this.setState({
        quizFinished: true,
      });
    }
  }

  render() {
    return (
      <section className="quiz-sec">
        {/* Steps */}
        <div className={`quiz-box ${this.state.score === this.state.questions.length && "full-score"}`}>
          {this.state.quizFinished || (
            <div className="steps">
              {this.state.questions.map((question, index) => {
                return (
                  <span key={question.id} className={`step ${this.state.currentQuestion === index ? "step--active" : ""}`}>
                    {index + 1}
                  </span>
                );
              })}
            </div>
          )}

          {/* Score Result */}
          {this.state.quizFinished && (
            <h3 className="quiz-result">{this.state.score === this.state.questions.length ? "you are smart !! 🎉🎉" : `you get ${this.state.score} score from ${this.state.questions.length}`}</h3>
          )}

          {/* Questions & Answers */}
          {this.state.quizFinished || (
            <>
              <h3 className="question-title">{this.state.questions[this.state.currentQuestion].questionText}</h3>
              <div className="answers">
                {this.state.questions[this.state.currentQuestion].answerOptions.map(answer => {
                  return (
                    <div key={answer.id} className="answer" onClick={this.answerHandler.bind(this, answer.isCorrect)}>
                      {answer.text}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default App;
