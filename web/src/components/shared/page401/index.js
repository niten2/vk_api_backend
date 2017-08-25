import React, { Component } from 'react'

class Page401 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">401</h1>
                <h4 className="pt-3">Oops! 401 status</h4>
                <p className="text-muted">The page you 401.</p>
              </div>
              <div className="input-prepend input-group">
                <span className="input-group-addon"><i className="fa fa-search"></i></span>
                <input className="form-control" size="16" type="text" placeholder="What are you looking for?" />
                <span className="input-group-btn">
                  <button className="btn btn-info" type="button">Search</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page401
