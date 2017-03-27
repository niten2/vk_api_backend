// import { } from "test/fixtures"

export const valid_post = {
  name: "test",
  body: "body",
}

export const valid_comment = {
  body: "body",
}

export const valid_comment_params = {
  "data": {
    "type": "comments",
    "attributes": {
      "body": "new body",
    },
  },
}


export const valid_user = {
  email: "test@test.com",
  password: "12345678",
  name: "NAME USER",
}
