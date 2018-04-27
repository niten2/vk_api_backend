import vk from 'config/vk'
import { cond, pipe, anyPass, equals, prop, propEq, find } from 'ramda'
import { delay } from "app/services/utils"

export const addFriend = async (userId) => {
  const response = await vk.api.friends.add({
		user_id: userId,
	})

	console.log(response)
}

export const andPersonInFriend = async (person) => {

	let res = await addFriend(person.uid)

  console.log(res)

  // const response = await vk.api.friends.add({
		// user_id: userId,
	// })

  // await delay(2000)
	// console.log(response)
}


export const checkFriend = async (userId) => {
  const response = await vk.api.friends.areFriends({
		user_ids: [userId],
	})

  const checkHaveFriendStatusUserId = pipe(
    find(propEq('user_id', Number.parseInt(userId))),
    prop("friend_status"),
    anyPass([equals(1), equals(2), equals(3)])
  )

  return checkHaveFriendStatusUserId(response)
}

export const checkAndSetFriend = async (person) => {
  const isFriend = await checkFriend(person.uid)

  await person.set({ isFriend })
  await person.save()

  console.log(person.uid, person.isFriend)
  await delay(2000)
}
