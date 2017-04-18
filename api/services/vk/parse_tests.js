import fs  from "fs"

const parseTest = (data) => {
  let values = []

  data.map((object) => {
    let result = {}
    let question = object["question"]
    let answers = []

    object["answers"].map(answer => {

      if (answer["checked"] == true) {
        answers.push(answer["body"])
      }
    })

    result["question"] = question
    result["answers"] = answers
    values.push(result)
  })

  return values
}

let test = JSON.parse(fs.readFileSync(`db/data/test.txt`, 'utf8'))
let result = parseTest(test)


result.map(value => {
  console.log(`${value["question"]} = ${value["answers"]}`)
})

export default parseTest
