// import React, { PropTypes, Component } from 'react'
// import { observer } from 'mobx-react'
// import { autorun } from 'mobx'
// import { UIStore } from 'stores'
// // import { User, Tag } from "models"

// import Select from 'react-select'
// // import { filter, sortBy, size } from "lodash"

// import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'reactstrap'
// import { Link } from 'lib/nav_link'
// import Notification from 'lib/notification'
// import Spinner from 'components/shared/spinner'

// // @observer
// export default class SelectView extends Component {

//   async componentWillMount() {
//     // let tags = await Tag.loadAll({kind: "users"})
//     // let firstTag = tags.body[0]
//     // this.setState({
//     //   tag: {
//     //     id: firstTag.id,
//     //     name: firstTag.name,
//     //   },
//     //   loading: false,
//     // })
//   }

//   state = {
//     loading: true,
//     tag: {
//       name: "",
//       id: "",
//     },
//   }

//   handleSelect = (value) => {
//     // UIStore.loading = true

//     // User.loadAll({ tag_id: value.id, filter: ["active"] }).then(response => {
//     //   let ids = []

//     //   response.body.map(object => {
//     //     ids.push(object.id)
//     //   })

//     //   autorun(() => {
//     //     UIStore.user_ids = ids
//     //     UIStore.loading = false
//     //   })
//     // })

//     // this.setState({ tag: value })
//   }

//   render() {
//     // const tagUsers = filter(Tag.all(), { kind: "users"})
//     const tagUsers = []

//     let { select, options, tag } = this.state
//     let { count } = this.props


//     return (
//       <div>

//         <Col xs={6}>
//           <Select
//             name="form-field-name"
//             value={ tag }
//             options={tagUsers || ""}
//             onChange={this.handleSelect}
//             valueKey="id"
//             labelKey="name"
//           />
//         </Col>

//         <Col xs={3}>
//           { count }
//         </Col>

//         <Col xs={3}>
//           <Link href="/users/new">
//             <Button>
//               New
//             </Button>
//           </Link>
//         </Col>

//         <br />

//       </div>
//     )
//   }

// }
