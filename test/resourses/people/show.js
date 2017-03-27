import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

let Person = context.models.Person

describe('GET /people/:id', () => {

  beforeEach((done) => {
    Person.remove({}, (err) => {
      done()
    })
  })

  xit('should GET all', (done) => {

    let object = new Person({
      name: "The Lord of the Rings",
    })

    object.save((err, post) => {
      chai.request(context.app)
      .get(`/people/${object.id}`)
      .end((err, res) => {
        expect(res).to.status(200)
        expect(res.body).to.be.a("object")
        expect(res.body).to.have.property('data').property("id")
        expect(res.body).to.have.property('data').property("attributes").property('name').eql(object.name)
        done()
      })
    })

  })

})
