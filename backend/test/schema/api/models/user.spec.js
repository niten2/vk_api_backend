import { expect } from 'chai'
import schema from "api/graphql/schema"

const User = schema._typeMap.User

describe('Models', () => {
  it('User', () => {
    expect(User.getFields()).to.have.property('id')
    expect(User.getFields()).to.have.property('name')
    expect(User.getFields()).to.have.property('email')
    expect(User.getFields()).to.have.property('password')
  })
})
