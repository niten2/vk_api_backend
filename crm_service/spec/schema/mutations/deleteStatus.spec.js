import schema from 'api/graphql/schema'
import { expect } from 'chai'
import { Status } from "api/models"
import { status_fixtures } from "spec/support/fixtures"

const deleteStatus = schema._typeMap.Mutation.getFields().deleteStatus.resolve

xdescribe(__filename, () => {

  beforeEach(async () => {
    await Status.destroy({where: {}, truncate: true})
  })

  it("should delete status", async () => {
    let status = await Status.create(status_fixtures)
    let args = { input: { id: status.id } }
    let response = await deleteStatus(null, args, {})

    expect(await Status.findById(status.id)).to.eq(null)
  })

})
