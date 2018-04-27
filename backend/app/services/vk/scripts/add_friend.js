import { isEmpty } from "ramda"
import { vkPerson } from "app/models"
import { andPersonInFriend } from "app/services/vk/methods"
import logger from "app/services/logger"

const main = async () => {
  try {
		const person = await vkPerson.findOne({ where: { isFriend: false } })

    if (!person) {
			logger.info("users not found")
    }

		await andPersonInFriend(person)
		// person
    // await Promise.all(persons.map(andPersonInFriend))

  } catch (err) {
		logger.error(err)
  }
}

main()
