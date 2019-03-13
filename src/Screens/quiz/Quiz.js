import React, { Component } from "react";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizList: [
        {
          question: "question1",
          answers: [
            {
              r1: "response1"
            },
            {
              r2: "response2"
            },
            {
              r3: "response3"
            },
            {
              r4: "response4"
            }
          ]
        },
        {
          question: "question2",
          answers: [
            {
              r1: "response21"
            },
            {
              r2: "response22"
            },
            {
              r3: "response23"
            },
            {
              r4: "response24"
            }
          ]
        },
        {
          question: "question3",
          answers: [
            {
              r1: "response13"
            },
            {
              r2: "response23"
            },
            {
              r3: "response33"
            },
            {
              r4: "response43"
            }
          ]
        }
      ],
      currentIndex: 0
    };
  }
  nextQuestion = () => {
    if (this.state.currentIndex < this.state.quizList.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  };
  previousQuestion = () => {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  };
  render() {
    return (
      <div className="container">
        Page Quiz
        <div className="grid">
          <div id="quiz">
            <h1>Quiz</h1>
            <hr style={{ marginBottom: "20px" }} />

            <p id="question">
              {" "}
              {this.state.quizList[this.state.currentIndex].question}{" "}
            </p>

            <div className="buttons">
              <table>
                <tr>
                  <td>
                    <button id="btn0">
                      <span id="choice0">
                        {
                          this.state.quizList[this.state.currentIndex]
                            .answers[0].r1
                        }{" "}
                      </span>
                    </button>
                  </td>
                  <td>
                    <button id="btn1">
                      <span id="choice1">
                        {" "}
                        {
                          this.state.quizList[this.state.currentIndex]
                            .answers[1].r2
                        }{" "}
                      </span>
                    </button>
                  </td>
                </tr>

                <tr id="tr">
                  <td>
                    <button id="btn2">
                      <span id="choice2">
                        {" "}
                        {
                          this.state.quizList[this.state.currentIndex]
                            .answers[2].r3
                        }{" "}
                      </span>
                    </button>
                  </td>
                  <td>
                    <button id="btn3">
                      <span id="choice3">
                        {" "}
                        {
                          this.state.quizList[this.state.currentIndex]
                            .answers[3].r4
                        }{" "}
                      </span>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div className="d-flex justify-content-around w-100 mt-5">
              <button className="btn btn-dark" onClick={() => this.previousQuestion()}>previous</button>
              <button className="btn btn-dark" onClick={() => this.nextQuestion()}>next</button>
            </div>
            <hr style={{ marginTop: "50px" }} />
            <footer>
              <p id="progress">
                Question {this.state.currentIndex + 1} /{" "}
                {this.state.quizList.length}
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
