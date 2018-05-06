import { dropDb } from 'db/sequelize'

const main = async () => {
  try {
    await dropDb()

    console.log("clear db", process.env.NODE_ENV)
  } catch (err) {
    console.log(err)
  }
}

main()
