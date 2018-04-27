import { dropDb } from 'db/sequelize'

// TODO not work
const main = async () => {
  try {
    let res = await sequelize.dropAllSchemas()
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

main()
