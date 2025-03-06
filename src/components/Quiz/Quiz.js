import "./Quiz.css";
import React from "react";
import QuizResult from "./QuizResult/QuizResult";
import Question from "./Question/Question";
import Steps from "./Steps/Steps";
import Answers from "./Answers/Answers";

class Quiz extends React.Component {
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
    // increase score
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
        <div className={`quiz-box ${this.state.score === this.state.questions.length && "full-score"}`}>
          {/* Steps */}
          {this.state.quizFinished || <Steps questions={this.state.questions} questionNumber={this.state.currentQuestion} />}

          {/* Score Result */}
          {this.state.quizFinished && <QuizResult score={this.state.score} questionsCount={this.state.questions.length} />}

          {/* Questions & Answers */}
          {this.state.quizFinished || (
            <>
              <Question question={this.state.questions[this.state.currentQuestion].questionText} />
              {/* <div className="answers">
                {this.state.questions[this.state.currentQuestion].answerOptions.map(answer => {
                  return (
                    <div key={answer.id} className="answer" onClick={this.answerHandler.bind(this, answer.isCorrect)}>
                      {answer.text}
                    </div>
                  );
                })}
              </div> */}
              <Answers answersData={this.state.questions[this.state.currentQuestion].answerOptions} onAnswerToQuestion={this.answerHandler.bind(this)} />
            </>
          )}
        </div>
      </section>
    );
  }
}

export default Quiz;
