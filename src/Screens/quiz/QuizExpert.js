import React, { Component } from "react";

import Profile from '../Profile/Profile';

export default class QuizExpert extends Component {
  



constructor(props) {
  super(props);
  this.state = {
    resultat:0,
    taux:10,
    colorClick0:false,
      colorClick1:false,
      colorClick2:false,
      colorClick3:false,
    userAnswers:this.initlist(10),
   // jsonQuiz :this.getQuizById('5c72b7126cc7633cd4898490'),
    correctAnswers:[[0],[1,2],[0],[2],[3],[3,2],[3],[3],[3],[3]],
    quizList: [
      {
        question: "What is the output of the following code : print(3 >= 3)?",
        answers: [
            {
            r1: "3 >= 3"
            },
            {
            r2: "True"
            },
            {
            r3: "False"
            },
            {
            r4: "None"
            }
         ],
      
         },
      
      {
        question: "Which code opens the 'nDF' file in addition mode ?",
        answers: [
          {
            r1: "open('nDF')"
          },
          {
            r2: "open('a', 'nDF')"
          },
          {
            r3: "open('nDF', 'a')"
          },
          {
            r4: "open('nDF', 'a', 'b')"
          }
        ],
        
      },

      {
        question: "What is the name given to strings ?",
        answers: [
          {
            r1: "String"
          },
          {
            r2: "Tuple"
          },
          {
            r3: "Integer"
          },
          {
            r4: "Float"
          }
        ],
        

      },

           {
          question: "What is the correct syntax for a method ?",
          answers: [
              {
              r1: ".method"
              },
              {
              r2: "Method."
              },
              {
              r3: "Method()"
              },
              {
              r4: "method =>()"
              }
           ],
        
           },

           {
            question: "What name is given to an object created by a class ?",
            answers: [
              {
                r1: "Variable"
              },
              {
                r2: "Fonction"
              },
              {
                r3: "Instance"
              },
              {
                r4: "constrictor"
              }
          ],},

           {
          question: "What is used to define a block of code (body of loop, function etc.) in Python ?",
          answers: [
              {
              r1: "Curly braces"
              },
              {
              r2: "Parenthesis"
              },
              {
              r3: "Indentation"
              },
              {
              r4: "Quotation"
              }
           ],
        
           },
           {
          question: "In the following code, (n = '5'). n is a/an ?",
          answers: [
              {
              r1: "integer"
              },
              {
              r2: "string"
              },
              {
              r3: "tuple"
              },
              {
              r4: "operator"
              }
           ],
        
           },
           {
          question: "What is the output of the following code : print(1, 2, 3, 4, sep='*') ?",
          answers: [
              {
              r1: "1 2 3 4"
              },
              {
              r2: "1234"
              },
              {
              r3: "1*2*3*4"
              },
              {
              r4: "24"
              }
           ],
        
           },
           {
          question: "What is used to take input from the user in Python?",
          answers: [
              {
              r1: "cin"
              },
              {
              r2: "scanf()"
              },
              {
              r3: "input()"
              },
              {
              r4: "<>"
              }
           ],
        
           },
           {
          question: "What is the output of the following code numbers = [2, 3, 4] print(numbers)?",
          answers: [
              {
              r1: "2, 3, 4"
              },
              {
              r2: "2 3 4"
              },
              {
              r3: "[2, 3, 4]"
              },
              {
              r4: "[2 3 4]"
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
        taux:this.state.taux+10,
        colorClick0:false,
        colorClick1:false,
        colorClick2:false,
        colorClick3:false
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
                    <button id="btn0" style={{backgroundColor: `${this.state.colorClick0 ? 'blue': '#57636e' }`}} onClick={()=> this.selectResponse(0)}>
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
                     id="btn1" style={{backgroundColor: `${this.state.colorClick1 ? 'blue': '#57636e' }`}}>
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
                    <button id="btn2" style={{backgroundColor: `${this.state.colorClick2 ? 'blue': '#57636e' }`}} onClick={()=> this.selectResponse(2)}>
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
                    <button id="btn3" style={{backgroundColor: `${this.state.colorClick3 ? 'blue': '#57636e' }`}}  onClick={()=> this.selectResponse(3)}>
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