import { expect } from 'chai'
import schema from "api/graphql/schema"

const SettingInput = schema._typeMap.SettingInput

describe('Inputs', () => {
  it('SettingInput', () => {
    expect(SettingInput.getFields()).to.have.property('name')
    expect(SettingInput.getFields()).to.have.property('value')
  })
})
