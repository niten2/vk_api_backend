import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

describe('PUT /people/:id', () => {

  let Model = context.models.Person
  let url
  let params
  let model

  beforeEach(async (done) => {
    await Model.remove({})
    model = await new Model({ name: "The Lord of the Rings" })
    await model.save()
    url = `/people/${model._id}`

    params = {
      "data": {
        "type": "people",
        "attributes": {
          "name": "test",
        },
      },
    }

    done()
  })

  xit('should Update object', async (done) => {
    chai.request(context.app)
    .patch(url)
    .set('content-type', 'application/vnd.api+json')
    .send(params)
    .end((err, res) => {
      // console.log(res.body)
      // expect(res).to.status(204)
      // expect(res.body).to.be.a("object")
      // expect(res.body).to.have.property('name').eql("test")
      // expect(res.body).to.have.property('body').eql("test")
      done()
    })
  })

})

