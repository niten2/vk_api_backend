import vk from 'config/vk'
import { cond, pipe, anyPass, equals, prop, propEq, find } from 'ramda'

export const addFriend = async () => {
  const response = await vk.api.friends.add({
		user_id: 12347839,
	})

	console.log(response)
}

export const checkFriend = async (userId) => {
  const response = await vk.api.friends.areFriends({
		user_ids: [userId],
	})

  const checkHaveFriendStatusUserId = pipe(
    find(propEq('user_id', userId)),
    prop("friend_status"),
    anyPass([equals(1), equals(2), equals(3)])
  )

  return checkHaveFriendStatusUserId(response)
}

