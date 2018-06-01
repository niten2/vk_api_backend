import { VkPerson } from "app/models"
import { authenticated } from "app/services/graphql"

export const createVkFriends = authenticated(async (root, args, ctx) => {
  const { user } = ctx
  let { ids } = args.input

  ids = ids.split("\n")

  let persons = []
  let errors = []

  await Promise.all(
    ids.map(async (id) => {
      try {
        let person = await VkPerson.create({ uid: id, user_id: user.id })

        persons.push(person)
      } catch (err) {
        errors.push({
          uid: id,
          message: err.message,
        })
      }
    })
  )

  return {
    persons,
    errors,
  }
})
