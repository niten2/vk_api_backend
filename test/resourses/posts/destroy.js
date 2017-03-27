import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

import { valid_post } from "test/fixtures"

describe('Destroy DELETE /posts', () => {

  let Model = context.models.Post
  let object
  let url

  beforeEach(async () => {
    await Model.remove({})
    object = await Model.createObject(valid_post)
    url = `/posts/${object.id}`
  })

  it('response', async () => {
    expect(await Model.find({})).to.not.be.empty

    chai.request(context.app)
    .delete(url)
    .end( async (err, res) => {
      expect(res).to.status(204)
      expect(await Model.find({})).to.be.empty
    })

  })

})

