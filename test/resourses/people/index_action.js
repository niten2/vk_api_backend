import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

describe('index GET /people', () => {

  let Model = context.models.Person
  let url = "/people"
  let model

  beforeEach(async (done) => {
    await Model.remove({})
    model = await new Model({ name: "The Lord of the Rings" })
    await model.save()
    done()
  })

  xit('check status', async (done) => {
    expect(await Model.find({})).to.not.be.empty

    chai.request(context.app)
    .get(url)
    .end((err, res) => {
      expect(res).to.status(200)
      expect(res.body).to.be.a("object")
      expect(res.body).to.have.property('data').deep.property("[0].id")
      expect(res.body).to.have.property('data').deep.property("[0].attributes.name")
      done()
    })

  })

})
