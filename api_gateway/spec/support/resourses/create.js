// SharedRestCreate({
//   Model: Model,
//   url: url,
//   attributes: [
//     "name",
//     "body",
//   ],
//   params: params,
// })

import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

export default (options = {}) => {

  const Model = options.Model
  const attributes = options.attributes
  const params = options.params
  const url = options.url

  it('response', async () => {
    chai.request(context.app)
    .post(url)
    .send(params)
    .end( async (err, res) => {
      expect(res).to.status(200)
      expect(res.body).to.have.property('data').property("id")
      attributes.map( (field) => {
        expect(res.body).to.have.property('data').property("attributes").property(field).eql(params.data.attributes[field])
      })
      expect(await Model.find({})).to.not.be.empty
    })
  })

}

