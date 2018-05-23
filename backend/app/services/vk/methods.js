// import vk from 'config/vk'
import { buildVk } from 'config/vk'
import { User, VkPerson } from "app/models"
import { cond, pipe, anyPass, equals, prop, propEq, find } from 'ramda'
import { delay } from "app/services/utils"
import logger, { loggerJob } from "app/services/logger"


export const addFriend = async (person, user) => {
  const vk = buildVk(user.vk_token)

  const res = await vk.api.friends.add({ user_id: Number.parseInt(person.uid) })

  // NOTE
  // 1 — заявка на добавление данного пользователя в друзья отправлена;
  // 2 — заявка на добавление в друзья от данного пользователя одобрена;
  // 4 — повторная отправка заявки.
  const isValid = anyPass([equals(1), equals(2), equals(4)])

  if (isValid(res)) {
    await person.set({ isFriend: true })
    await person.save()
  }

  return true
}

// export const andPersonInFriend = async () => {
//   try {
//     const person = await VkPerson.findOne({ where: { isFriend: false } })

//     if (!person) {
//       logger.info("users not found")
//     }

//     await addFriend(person, user)

//     logger.info(person.uid, "add in friend")
//   } catch (err) {
//     logger.error(err)
//   }
// }

export const andPersonInFriendUser = async (user) => {
  try {
    if (!user) throw new Error("user_id not found")

    const person = await VkPerson.findOne({
      where: {
        isFriend: false,
        user_id: user.id,
      }
    })

    if (!person) {
      const messageNotFound = `vk persons not found, user.id=${user.id}`

      logger.info(messageNotFound)
      loggerJob.info(messageNotFound)
    }

    await addFriend(person, user)
    await person.update({ addFriendAt: new Date() })

    const messageSucces = `person.uid = ${person.uid}, add in friend for user.id = ${user.id}`

    logger.info(messageSucces)
    loggerJob.info(messageSucces)
  } catch (err) {
    logger.error(err)
  }
}

export const andPersonInFriendWithLimit = async () => {
  const users = await User.findAll({
    where: {
      vk_active: true,
    }
  })

  await Promise.all(
    users.map(async (user) => {

      if (await user.isFriendNeed()) {
        await andPersonInFriendUser(user)
      } else {
        const message = `user id, ${user.id}, user enough friend`

        logger.info(message)
        loggerJob.info(message)
      }

    })

  )
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
