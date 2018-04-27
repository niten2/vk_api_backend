import { cond, includes, pipe, contains, anyPass, equals, prop, propEq, find } from 'ramda'

// describe('Services', () => {

  it("Jwt", () => {
    const userId = 390813606

    // console.log(111)

    const response = [ { user_id: 390813606, friend_status: 1 } ]


    const checkHaveFriendStatusUserId = pipe(
      find(propEq('user_id', userId)),
      prop("friend_status"),
      anyPass([equals(1), equals(2), equals(3)])
    )

    let z = checkHaveFriendStatusUserId(response)

    console.log(z)
  })

// })
