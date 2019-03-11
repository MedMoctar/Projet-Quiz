import React, { Component } from 'react'

export default class ComposantNiveau extends Component {
  render() {
    return (
      <div className="container">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Levels</button>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Choose Level </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <fieldset className="form-group">
                            <div className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Levels</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                <label className="form-check-label" for="gridRadios1">
                                    Level Meduim
                                </label>
                                </div>

                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label className="form-check-label" for="gridRadios2">
                                    Level Hard
                                </label>
                                </div>

                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label className="form-check-label" for="gridRadios2">
                                    Level Expert
                                </label>
                                </div>
                            
                            </div>
                            </div>
                        </fieldset>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Validate</button>
                </div>
                </div>
            </div>
            </div>
        
      </div>
    )
  }
}
