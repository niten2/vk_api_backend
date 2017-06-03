import { getCsv } from "api/services/files"
import { Client } from "api/models"
import R from "ramda"

getCsv("db/csv/clients.csv").then( data => {
  const promises = await R.map(createClient, data)

  await Promise.all(
    promises.map(async (promise) => {
      await promise
    })
  )

})

const createClient = async (object) => {
  await Client.create({
    number: object["№:"],
    name: object["Имя"],
    date_birth: object["дата рождения"],
    phone: object["Телефон"],
    note: object["Отметка"],
  })
}
