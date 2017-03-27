import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

describe('POST /people', () => {

  let Model = context.models.Person
  let params
  let url

  beforeEach(async (done) => {
    await Model.remove({})
    // url = `/people`

    // params = {
    //   "data": {
    //     "type": "people",
    //     "attributes": {
    //       "name": "123Ember Hams33333ter"
    //     }
    //   }
    // }

    done()
  })


  xit('should create', async (done) => {

    let object = {
      name: "The Lord of the Rings",
    }

    chai.request(context.app)
    .post(url)
    .set('content-type', 'application/vnd.api+json')
    .send(params)
    .end( async (err, res) => {
      console.log(res.body)
      // console.log(err)
      // expect(res).to.status(204)
      // expect(await Model.find({})).to.be.empty
      done()
    })
  })

})


// {
//   "data": {
//     "type": "person",
//     "attributes": {
//       "name": "Ember Hamster"
//     }
//   }
// }

