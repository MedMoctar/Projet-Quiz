import React, { Component } from 'react'

export default class Quiz extends Component {
  render() {
    return (
      <div className="container">     
            Page Quiz

            <div className="grid">
                <div id="quiz">
                    <h1>Quiz</h1>
                     <hr style={{marginBottom: '20px'}} />

                    <p id="question">The Question ?  </p>

                    <div className="buttons">
                        <table>
                            <tr>
                                <td>
                                    <button id="btn0"><span id="choice0"> R1 </span></button>
                                </td>
                                <td>
                                    <button id="btn1"><span id="choice1"> R2 </span></button>
                                </td>
                            </tr>
                            

                            <tr id="tr">
                                <td>
                                    <button id="btn2"><span id="choice2"> R3 </span></button>
                                </td>
                                <td>
                                    <button id="btn3"><span id="choice3"> R4 </span></button>
                                </td>
                            </tr>
                        </table>

                    </div>

                    <hr style={{marginTop: '50px'}} />
                    <footer>
                        <p id="progress">Question x of y</p>
                     </footer>
                </div>
            </div>
      </div>
    )
  }
}
