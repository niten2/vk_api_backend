import * as React from "react"

// import AuthProvider from "src/config/auth_provider"
// import Link from "src/config/link"
// import { ErrorMessage } from "./components"
import { withData } from "./queries"
// import { withRouter } from "react-router"

// interface P {
//   createToken: (options: object) => Promise<any>
//   history: any
// }

// interface S {
//   email: string
//   password: string
//   error: string | null
//   loading: boolean
// }

class Login extends React.Component<any, any> {


  componentWillReceiveProps(nextProps: any) {
    console.log("nextProps", nextProps)
  }

  // state = {
  //   email: 'test@test.com',
  //   password: '12345',
  //   error: null,
  //   loading: false,
  // }

  // handleSetState = (e) => {
  //   const { name, value } = e.target
  //   let variable = {}

  //   variable[name] = value

  //   this.setState(variable)
  // }

  // handleLogin = async () => {
  //   const { email, password } = this.state
  //   this.setState({ error: null })

  //   const options = {
  //     variables: {
  //       input: {
  //         email,
  //         password,
  //       }
  //     }
  //   }

  //   try {
  //     this.setState({ loading: true })
  //     let response = await this.props.createToken(options)

  //     const token = response.data.createToken.token

  //     AuthProvider.saveToken(token)


  //     this.props.history.push("/")
  //   } catch (err) {
  //     this.setState({ loading: false })
  //     this.setState({ error: err.message })
  //   }
  // }

  // handleOnKeyPress = (target: any) => {
  //   if (target.charCode === 13) {
  //     this.handleLogin()
  //   }
  // }


  handleTest = async () => {

    console.log(111)

    await this.props.testQuery.refetch()
  }

  render () {
    console.log(this.props)

    // let { error, loading } = this.props

    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">



            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">

                    dsfsdfsdf

                    <button onClick={this.handleTest}>Button</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default withData(Login)
