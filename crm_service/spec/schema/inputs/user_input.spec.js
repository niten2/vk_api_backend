import { expect } from 'chai'
import schema from "api/graphql/schema"

const UserInput = schema._typeMap.UserInput

xdescribe(__filename, () => {
  it('SettingInput', () => {
    expect(UserInput.getFields()).to.have.property('name')
    expect(UserInput.getFields()).to.have.property('email')
    expect(UserInput.getFields()).to.have.property('password')
  })
})
