import React, { Component } from "react";

export default class ComposantNiveau extends Component {
  constructor(props){
    super(props);
    this.state={
      choice: ''
    }
  }
  handleChoice= (e) => {
    console.log(e.target.value)
    this.setState({
      choice: e.target.value
    });
  }
  render() {
    return (
      <div className="container" id={this.props.id}> 
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
          
        >
          Levels
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document"> 
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Choose Level{" "}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <fieldset className="form-group">
                  <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">
                      Levels
                    </legend>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios1"
                          value="medium"
                          onChange={this.handleChoice}
                        />
                        <label className="form-check-label" for="gridRadios1">
                          Level Medium
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="hard"
                          onChange={this.handleChoice}
                        />
                        <label className="form-check-label" onClicck={() => this.handleChoice('hard')} for="gridRadios2">
                          Level Hard
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="expert"
                          onChange={this.handleChoice}
                        />
                        <label className="form-check-label" onClicck={() => this.handleChoice('expert')} for="gridRadios2">
                          Level Expert
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" onClick={()=> this.props.onValidate(this.state.choice)} className="btn btn-primary">
                  Validate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
