import * as React from 'react'
import * as moment from "moment"
import DatePicker from "react-datepicker"
import { Input } from 'reactstrap'
import { set, lensProp } from 'ramda'
import "react-datepicker/dist/react-datepicker.css"

import Link from "src/config/link"
import Notification from 'src/config/notification'
import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import { withData } from 'src/components/clients/loans/edit/queries'

interface P {
  clientQuery: {
    client: any,
    loading: boolean
    error: any
  }
  loanQuery: {
    loan: any,
    loading: boolean
    error: any
  }
  updateLoanQuery: any
  calculateLoanQuery: any
}


class EditLoan extends React.Component<P, any> {

  state = {
    loan: {
      id: "",
      sum: "",
      date_start: null,
      date_end: null,
      client: "",
      total: 0,
    },
  }

  componentWillReceiveProps(props: any) {
    if (!props.loanQuery.loading && !props.loanQuery.error) {
      let loan = props.loanQuery.loan

      loan = set(lensProp("date_start"), moment(new Date(loan.date_start)), loan)
      loan = set(lensProp("date_end"), moment(new Date(loan.date_end)), loan)

      this.setState({ loan })
    }
  }

  handleSetState = async (e) => {
    const { name, value } = e.target

    let loan = set(lensProp(name), value, this.state.loan)
    let calculateLoan = await this.handleCaclulateLoan(loan)

    this.setState({ loan: calculateLoan })
  }

  handleUpdate = async (e?: any) => {
    if (e) { e.preventDefault() }
    const { loan } = this.state

    const options = {
      variables: {
        input: {
          id: loan.id,
          sum: loan.sum,
          date_start: loan.date_start,
          date_end: loan.date_end,
        }
      },
    }

    try {
      await this.props.updateLoanQuery(options)

      Notification.success("update loan")
    } catch (err) {
      Notification.error(err.message)
    }
  }

  handleCaclulateLoan = async (loan: any) => {
    let { client } = this.props.clientQuery
    let loanRes

    if (loan.sum === 0 || loan.sum === undefined || loan.sum === "") {
      loanRes = set(lensProp("total"), 0, loan)
      return loanRes
    }

    const options = {
      variables: {
        input: {
          sum: loan.sum,
          date_start: loan.date_start,
          date_end: loan.date_end,
          client: client.id,
        }
      }
    }

    try {
      let res = await this.props.calculateLoanQuery(options)
      const total = res.data.calculateLoan.total

      loanRes = set(lensProp("total"), total, loan)
    } catch (err) {
      Notification.error(err.message)
    }

    return loanRes
  }

  handleDatePickerDateStart = async (value: any) => {
    let loan = set(lensProp("date_start"), value, this.state.loan)
    let calculateLoan = await this.handleCaclulateLoan(loan)

    this.setState({ loan: calculateLoan })
  }

  handleDatePickerDateEnd = async (value: any) => {
    let loan = set(lensProp("date_end"), value, this.state.loan)
    let calculateLoan = await this.handleCaclulateLoan(loan)

    this.setState({ loan: calculateLoan })
  }

  handleOnKeyPress = (target: any) => {
    if (target.charCode === 13) {
      this.handleUpdate()
    }
  }

  render() {
    let { loading, error } = this.props.loanQuery
    let loadingClient = this.props.clientQuery.loading
    let errorClient = this.props.clientQuery.error

    let { client } = this.props.clientQuery
    let { loan } = this.state

    if (loading || loadingClient) {
      return <Spinner />
    }

    if (error || errorClient) {
      return <Page500 />
    }

    let rate = client && client.territory ? client.territory.rate : "territory not found"
    let total = loan && loan.total === 0 || loan.total === undefined ? "total not calculate" : loan.total

    return (
      <div className="container-fluid">
        <div className="card">

          <div className="card-header">
            <i className="fa fa-align-justify" /> Edit Loan
          </div>

          <div className="card-block">
            <form className="form-2orizontal">

              <div className="form-group row">
                <div className="col-md-12">
                  <div className="input-group">
                    <span className="input-group-addon">Sum</span>
                    <Input
                      name="sum"
                      placeholder="sum"
                      type="number"
                      onChange={this.handleSetState}
                      onKeyPress={this.handleOnKeyPress}
                      value={loan.sum}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <div className="input-group">
                    <span className="input-group-addon">Date start</span>
                    <DatePicker
                      className="form-control width100"
                      selected={loan.date_start}
                      onChange={this.handleDatePickerDateStart}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <div className="input-group">
                    <span className="input-group-addon">Date end</span>
                      <DatePicker
                        className="form-control width100"
                        selected={loan.date_end}
                        onChange={this.handleDatePickerDateEnd}
                      />
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <div className="input-group">
                    <span className="input-group-addon">Territory</span>
                    <div className="form-control">
                      {rate}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <div className="input-group">
                    <span className="input-group-addon">Summary</span>
                    <div className="form-control">
                      {total}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button
                  className="btn btn-primary"
                  onClick={this.handleUpdate}
                >
                  Save changes
                </button>

                {" "}

                <Link to={`/clients/${client.id}/loans`}>
                  <button
                    className="btn btn-default"
                  >
                    Cancel
                  </button>
                </Link>
              </div>

            </form>
          </div>

        </div>
      </div>
    )
  }

}

export default withData(EditLoan)
