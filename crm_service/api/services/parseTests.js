import fs  from "fs"
import R from "ramda"

R.get = R.curry((name, obj) => {
  return obj[name]
})

let getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(`db/data/test.txt`, 'utf8', function(err, data){
       if (err) {
         reject(err)
       } else {
         resolve(JSON.parse(data))
       }
    })
  })
}

let getAnswer = R.pipe(
  R.get("answers"),
  R.filter( R.where({ checked: R.equals(true) }) ),
  R.map(R.get("body"))
)

let putsValues = values => {
  values.map(value => {
    console.log(`${value["question"]} = ${getAnswer(value)}`)
  })
}

getData().then(data => {
  putsValues(data)
})

export default getData
