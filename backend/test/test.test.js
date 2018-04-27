import { cond, includes, pipe, contains, anyPass, equals, prop, propEq, find } from 'ramda'

// describe('Services', () => {

  it("Jwt", () => {
    const userId = 1959464

    // console.log(111)

    const response = [ { user_id: 1959464,  } ]

    const checkHaveFriendStatusUserId = pipe(
      find(propEq('user_id', userId)),
      prop("friend_status"),
      anyPass([equals(1), equals(2), equals(3)])
    )

    let z = checkHaveFriendStatusUserId(response)

  })

// })
