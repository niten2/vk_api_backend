import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

describe('DELETE /people', () => {

  let Model = context.models.Person
  let model
  let url

  beforeEach(async (done) => {
    await Model.remove({})
    model = await new Model({ name: "The Lord of the Rings" })
    await model.save()
    url = `/people/${model._id}`
    done()
  })

  xit('should Delete', async (done) => {
    expect(await Model.find({})).to.not.be.empty

    chai.request(context.app)
    .delete(url)
    .end( async (err, res) => {
      expect(res).to.status(204)
      expect(await Model.find({})).to.be.empty
      done()
    })

  })

})

