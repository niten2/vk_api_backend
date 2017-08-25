import React, { Component } from 'react'
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap'
import { Line } from 'react-chartjs-2'

const brandPrimary =  '#20a8d8'

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
}

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }


  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-primary">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }) }}>
                    <button onClick={() => { this.setState({ card1: !this.state.card1 }) }} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.card1}>
                      <i className="icon-settings"></i>
                    </button>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">9.823</h4>
                <p>Members online</p>
              </div>
              <div className="chart-wrapper px-3">
                <Line data={cardChartData1} options={cardChartOpts1} height={70}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Dashboard
