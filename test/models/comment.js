import context from "test/app.test"
import chai, { expect } from 'chai'
import { valid_user } from "test/fixtures"

import SharedCrudModel from "test/shared/model/crud"

describe('Comment', () => {

  let Model = context.models.Comment

  beforeEach( async () => {
    await Model.remove({})
  })

  SharedCrudModel({
    Model: Model,
    fixture: valid_user,
    attributes: [
      "body"
    ],
    update_attributes: {
      body: "new body",
    },
  })

})
