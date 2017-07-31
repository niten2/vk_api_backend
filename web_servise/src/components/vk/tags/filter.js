import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { UIStore } from 'stores'
// import { withApollo } from 'react-apollo'
// import { tagsQuery } from 'components/vk/graphql/querues'
// import { observer } from 'mobx-react'

class Filter extends Component {

  // async componentWillMount() {
  //   await this.query()
  // }

  state = {
    name: ""
  }

  // query = async (name) => {
  //   const result = await this.props.client.query({
  //     query: tagsQuery,
  //     variables: {
  //       filter: { name: name || null }
  //     },
  //   })
  //   UIStore.tags.tags = result.data.tags
  // }

  handleSetState = (e) => {
    let { value } = e.target
    this.setState({ name: value })
  }

  handleFilter = async (e) => {
    e.preventDefault()
    const { name } = this.state
    console.log("handleFilter", name)
    // await this.query(UIStore.tags.name)
  }

  handleClear = async (e) => {
    console.log("handleClear")
    // UIStore.tags.name = ""
    // await this.query()
  }

  render() {
    return (

      <div className="row">
        <div className="col-lg-12">

          <div className="card">

            <div className="card-header">
              <i className="pointer fa fa-align-justify"/> Filter
            </div>


            <div className="card-block">

                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="input-group">

                      <span className="input-group-addon">Name</span>
                      <input
                        className="form-control"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleSetState}
                      />

                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    className="btn btn-primary"
                    onClick={this.handleFilter}
                  >Filter</button>

                  &nbsp;

                  <button
                    onClick={this.handleClear}
                    className="btn btn-default"
                  >Clear</button>
                </div>

            </div>


          </div>
        </div>
      </div>

    )
  }
}

export default Filter
