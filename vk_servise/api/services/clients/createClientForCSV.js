import { getCsv } from "api/services/files"
import { Client } from "api/models"
import R from "ramda"

getCsv("db/csv/clients.csv").then( data => {
	R.map(createClient, data)
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
