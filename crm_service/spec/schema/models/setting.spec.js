import { expect } from 'chai'
import schema from "api/graphql/schema"

const Setting = schema._typeMap.Setting

xdescribe(__filename, () => {
  it('Setting', () => {
    expect(Setting.getFields()).to.have.property('id')
    expect(Setting.getFields()).to.have.property('name')
    expect(Setting.getFields()).to.have.property('value')
    expect(Setting.getFields()).to.have.property('createdAt')
    expect(Setting.getFields()).to.have.property('updatedAt')
  })
})
