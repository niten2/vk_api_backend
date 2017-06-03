import { Client } from "api/models"

const createObjects = async (object) => {
  await Client.create({
    number: object["№:"],
    name: object["Имя"],
    date_birth: object["дата рождения"],
    phone: object["Телефон"],
    note: object["Отметка"],
  })
}

export default createObjects
