import vk from 'config/vk'
import { User, VkPerson } from "app/models"
import { cond, pipe, anyPass, equals, prop, propEq, find } from 'ramda'
import { delay } from "app/services/utils"
import logger from "app/services/logger"

export const addFriend = async (person) => {
  const res = await vk.api.friends.add({ user_id: Number.parseInt(person.uid) })

  // NOTE
  // 1 — заявка на добавление данного пользователя в друзья отправлена;
  // 2 — заявка на добавление в друзья от данного пользователя одобрена;
  // 4 — повторная отправка заявки.

  if (anyPass([equals(1), equals(2), equals(4)])(res)) {
    await person.set({ isFriend: true })
    await person.save()
  }

  return true
}

export const andPersonInFriend = async () => {
  try {
    const person = await VkPerson.findOne({ where: { isFriend: false } })

    if (!person) {
      logger.info("users not found")
    }

    await addFriend(person)

    logger.info(person.uid, "add in friend")
  } catch (err) {
    logger.error(err)
  }
}

export const andPersonInFriendUser = async (user_id) => {
  try {
    if (!user_id) throw new Error("user_id not found")

    const person = await VkPerson.findOne({
      where: {
        isFriend: false,
        user_id
      }
    })

    if (!person) {
      logger.info("vk persons not found")
    }

    await addFriend(person)
    await person.update({ addFriendAt: new Date() })

    logger.info(`person.uid = ${person.uid}, add in friend for user.id = ${user_id}`)

  } catch (err) {
    logger.error(err)
  }
}

export const andPersonInFriendFirstUserWithLimit = async () => {
  const user = await User.findById(1)

  if (await user.friendNotEnough()) {
    await andPersonInFriendUser(user.id)
  } else {
    logger.info("user id", user.id, "user enough friend")
  }
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

  logger.info("checkAndSetFriend", person.uid, person.isFriend)
  await delay(2000)
}
