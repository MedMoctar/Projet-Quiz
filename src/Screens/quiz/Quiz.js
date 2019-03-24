
import React, { Component } from "react";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultat:0,
      userAnswers:this.initlist(10),
     // jsonQuiz :this.getQuizById('5c72b7126cc7633cd4898490'),
      correctAnswers:[[0],[1,2],[0],[2],[3],[3,2],[3],[3],[3],[3]],
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
          ],
          

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
          ],
          
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
        ],},
             {
            question: "question4",
            answers: [
                {
                r1: "response41"
                },
                {
                r2: "response42"
                },
                {
                r3: "response43"
                },
                {
                r4: "response44"
                }
             ],
          
             },
             {
            question: "question5",
            answers: [
                {
                r1: "response51"
                },
                {
                r2: "response52"
                },
                {
                r3: "response53"
                },
                {
                r4: "response54"
                }
             ],
          
             },
             {
            question: "question6",
            answers: [
                {
                r1: "response61"
                },
                {
                r2: "response62"
                },
                {
                r3: "response63"
                },
                {
                r4: "response64"
                }
             ],
          
             },
             {
            question: "question7",
            answers: [
                {
                r1: "response71"
                },
                {
                r2: "response72"
                },
                {
                r3: "response73"
                },
                {
                r4: "response74"
                }
             ],
          
             },
             {
            question: "question8",
            answers: [
                {
                r1: "response81"
                },
                {
                r2: "response82"
                },
                {
                r3: "response83"
                },
                {
                r4: "response54"
                }
             ],
          
             },
             {
            question: "question9",
            answers: [
                {
                r1: "response91"
                },
                {
                r2: "response92"
                },
                {
                r3: "response93"
                },
                {
                r4: "response94"
                }
             ],
          
             },
             {
            question: "question10",
            answers: [
                {
                r1: "response101"
                },
                {
                r2: "response102"
                },
                {
                r3: "response103"
                },
                {
                r4: "response104"
                }
             ],
          
             },
             
      ],
      currentIndex: 0
    };
  }
  nextQuestion = () => {
    if (this.state.currentIndex < this.state.quizList.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }else if(this.state.currentIndex == this.state.quizList.length -1){
     this.setState({
         
        resultat:this.computeResult(this.state.correctAnswers,this.state.userAnswers),
        
      });
    }
  };

  computeResult = (correctAnwers, userAnswers)=>{
       let result=0;
       for(let i=0;i<correctAnwers.length;i++){
           if(correctAnwers[i].length===userAnswers[i].length){
               for(let j=0;j<userAnswers[i].length;j++){
                   if(!correctAnwers[i].includes(userAnswers[i][j])){
                       break;
                   }else if(j===userAnswers[i].length-1){
                        result=result+1;
                   }
               }
           }
       }
       return result;
  };
  previousQuestion = () => {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  };

    initlist =(nb)=>{
     const ListResp=[];
     var i;
     for(i=0;i<nb;i++){
         ListResp.push([]);
     }
     return ListResp;
  }
  
 // @param {String} quizId 
  //@return promise
 
    /*getQuizById = async (quizId) => {
    const url = `http://10.0.2.2:8000/quizs/${quizId}`;
    // eslint-disable-next-line no-undef
    const response = await fetch(url);
    try {
        const json = await response.json();
        return json;
    } catch (e) {
        console.log(`Fetch failed: ${e}`);
    }
};*/

  selectResponse = (number) => {
       const list=this.state.userAnswers[this.state.currentIndex]
      if(!list.includes(number)){
          list.push(number);
          this.state.userAnswers[this.state.currentIndex]=list;
           this.setState({
         
            userAnswers:this.state.userAnswers
        });
      }else{
         
         list.splice(list.indexOf(number),1);
         this.state.userAnswers[this.state.currentQuestion]=list;
          this.setState({
            userAnswers:this.state.userAnswers
        });
        
      }
     
  };

  render() {
      console.log(this.state.userAnswers);
      console.log(this.state.resultat);
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
                    <button id="btn0" onClick={()=> this.selectResponse(0)}>
                      <span id="choice0">
                        {
                          this.state.quizList[this.state.currentIndex]
                            .answers[0].r1
                        }{" "}
                      </span>
                    </button>
                  </td>
                  <td>
                    <button
                    onClick={()=> this.selectResponse(1)}
                     id="btn1">
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
                    <button id="btn2" onClick={()=> this.selectResponse(2)}>
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
                    <button id="btn3" onClick={()=> this.selectResponse(3)}>
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
               {
                this.state.currentIndex < 9 ?
                <button className="btn btn-dark" onClick={() => this.nextQuestion()}>next</button> :
                <button type="button" className="btn btn-dark" data-toggle="modal" onClick={() => this.nextQuestion()} data-target="#exampleModalCenter">
                   next
                </button>
            }
            <div className="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">The Score :</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={{height:'350px'}}>
                   <div style={{marginLeft:'120px'}}><img className="rounded-circle" src={require('../../assets/images/th.jpg')}  style={{height: '200px', width:'200px'}} /></div>
                    <br/>
                    <div style={{marginLeft:'150px'}}><h4>Your Score is :</h4></div>
                    <br/>
                    <div style={{marginLeft:'200px'}}><h4>{this.state.resultat}/10</h4></div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" >Save changes</button>
                </div>
                </div>
            </div>
            </div>
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