import React, { Component } from 'react'

export default class Friends extends Component {
  render() {
    return (
        <div class="input-group mb-3">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
      </div>
    )
  }
}
