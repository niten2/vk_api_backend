import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

describe('Create POST /posts', () => {

  let Model = context.models.Post
  let url = `/posts`
  let params = {
    "data": {
      "type": "posts",
      "attributes": {
        "name": "name",
        "body": "body",
      }
    }
  }

  beforeEach(async () => {
    await Model.remove({})
  })

  it('response', async () => {
    chai.request(context.app)
    .post(url)
    .send(params)
    .end( async (err, res) => {
      expect(res).to.status(200)
      expect(res.body).to.have.property('data').property("id")
      expect(res.body).to.have.property('data').property("attributes").property('name').eql(params.data.attributes.name)
      expect(res.body).to.have.property('data').property("attributes").property('body').eql(params.data.attributes.body)
      expect(await Model.find({})).to.not.be.empty
    })
  })

})


