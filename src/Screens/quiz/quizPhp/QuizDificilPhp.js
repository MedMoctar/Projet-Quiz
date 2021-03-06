import React, { Component } from "react";

import Profile from '../../Profile/Profile';

export default class QuizDificilPhp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultat:0,
      taux:10,
      userAnswers:this.initlist(10),
     // jsonQuiz :this.getQuizById('5c72b7126cc7633cd4898490'),
      correctAnswers:[[0],[1,2],[0],[2],[3],[3,2],[3],[3],[3],[3]],
      quizList: [
        {
            question: "The for loop ($i=0 ; $i<=3 ; $i++ ) { echo $i; }...",
            answers: [
              {
                r1: "Will be executed 1 times"
              },
              {
                r2: "Will be executed 2 times"
              },
              {
                r3: "Will be executed 3 times"
              },
              {
                r4: "Will be executed 4 times"
              }
                  ],
              },
        
        
             {
            question: "How do we check the equality of two variables: $a et $b ?",
            answers: [
                {
                r1: "$a = $b"
                },
                {
                r2: "$a == $b"
                },
                {
                r3: "$a != $b"
                },
                {
                r4: "if($a,$b)"
                }
             ],
          
             },
             {
            question: "What values can the Boolean type take ?",
            answers: [
                {
                r1: " 0 ou 1"
                },
                {
                r2: "TRUE ou FALSE"
                },
                {
                r3: "NULL"
                },
                {
                r4: "Toutes sauf NULL"
                }
             ],
          
             },

             {
                question: "What does PHP mean ? ",
                answers: [
                  {
                    r1: "Process Helper Page"
                  },
                  {
                    r2: "create HomePages"
                  },
                  {
                    r3: "Hypertext Preprocessor"
                  },
                  {
                    r4: "programming language"
                  }
                ],
                
      
              },

             {
            question: "Knowing that $a = 4. What statement displays : 4 = quatre ?",
            answers: [
                {
                r1: "echo $a = quatre;"
                },
                {
                r2: "echo '$a = 2+2'"
                },
                {
                r3: "echo $a = quatre"
                },
                {
                r4: "echo 4= quatre "
                }
             ],
          
             },
             {
            question: "Knowing that $ dodo = 6. What is the value of my night: $ dodo + = 2; ?",
            answers: [
                {
                r1: " 3"
                },
                {
                r2: "8"
                },
                {
                r3: "12"
                },
                {
                r4: "24"
                }
             ],
          
             },
             {
            question: "In which data table do we find the visitor's cookies? ?",
            answers: [
                {
                r1: "$SETCOOKIE"
                },
                {
                r2: "$COOKIES"
                },
                {
                r3: "$HTTP_COOKIES"
                },
                {
                r4: "$_COOKIE"
                }
             ],
          
             },

             {
                question: "What function returns the length of a text string ?",
                answers: [
                  {
                    r1: "strlen"
                  },
                  {
                    r2: "strlength"
                  },
                  {
                    r3: "length"
                  },
                  {
                    r4: "substr"
                  }
                ],
                
              },
              
             {
            question: "What function returns the number of seconds elapsed since January 1, 1970 ?",
            answers: [
                {
                r1: "time"
                },
                {
                r2: "timestamp"
                },
                {
                r3: "mktime"
                },
                {
                r4: "microtime"
                }
             ],
          
             },
             {
            question: "What function to remove an element from the end of a table ?",
            answers: [
                {
                r1: "array_splice()"
                },
                {
                r2: "array_pop()"
                },
                {
                r3: "array_pad()"
                },
                {
                r4: " array_shift()"
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
        currentIndex: this.state.currentIndex + 1,
        taux:this.state.taux+10
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
        currentIndex: this.state.currentIndex - 1,
        taux:this.state.taux-10
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
          if(number==0){
              this.setState({
                 colorClick0:this.state.colorClick0=true
             });
              
            }else if(number==1){
              this.setState({
                 colorClick0:this.state.colorClick1=true
             });
              
            } else if(number==2){
              this.setState({
                 colorClick0:this.state.colorClick2=true
             });
              
            } else if(number==3){
              this.setState({
                 colorClick0:this.state.colorClick3=true
             });
              
            }
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


  goToChallenge = () => {
    this.setState({
      challengeView: true,
    })
  }

  render() {
    const cView = this.state.challengeView
      console.log(this.state.userAnswers);
      console.log(this.state.resultat);

      const styles = {
        textinput: {
            width:this.state.taux + '%'
            
        }
     }

     const stylesButton = {
        textColor: {
            BorderColor:'red'
            
        }
     }
    return (
      <div>
        {
        !cView ?
        <div className="container">
        
        <div className="grid">
          <div id="quiz">
            <h1>Quiz</h1>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={styles.textinput} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.state.taux}</div>
                </div>
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
                   <div style={{marginLeft:'120px'}}><img className="rounded-circle" src={require('../../../assets/images/th.jpg')}  style={{height: '200px', width:'200px'}} /></div>
                    <br/>
                    <div style={{marginLeft:'150px'}}><h4>Your Score is :</h4></div>
                    <br/>
                    <div style={{marginLeft:'200px'}}><h4>{this.state.resultat}/10</h4></div>
                </div>
                <div className="modal-footer">
                    
                    <button type="button"  onClick={()=> this.goToChallenge()} className="btn btn-secondary" data-dismiss="modal">Close</button>  
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
      </div>:
      <Profile result={this.state.resultat} />
      }
      </div>

    );
                      }
                    }