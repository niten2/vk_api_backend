// node --require ../babelhook ./uniq.js

import { filter, compact, uniq } from "lodash"
import _ from "lodash"
import fs  from "fs"

const name = "all"
let all = fs.readFileSync(`./${name}.txt`, 'utf8')
let fake = fs.readFileSync('./fake.txt', 'utf8')

let arrayAll = compact(uniq(
  all.toString().split("\n")
))

let fakeAll = compact(uniq(
  fake.toString().split("\n")
))

var result = _.filter(arrayAll, (item) => {
  return !_.includes(fakeAll, item)
})


var file = fs.createWriteStream('./new.txt')

result.forEach( (item) => {
  file.write(item + '\n')
})

console.log(result.length)



// fs.readFile('./test.txt', 'utf8', (err, data) => {

//   if (err) {
//     return console.log(err)
//   }

//   var array = data.toString().split("\n")
//   let objects = compact(uniq(array))
//   // var file = fs.createWriteStream('./new-array.txt')
//   // objects.forEach( (v) => {
//   //   file.write(v + '\n')
//   // })

// })

// console.log(objects)
// console.log(objects.length)

// index others by "user + age"
// var lookup = _.indexBy(others, function(o) { return o.user + o.age.toString() })

// find all users where "user + age" exists in index, one loop, quick lookup. no nested loops
// var result = _.filter(users, function(u) {
//     return lookup[u.user + u.age.toString()] !== undefined
// })

// let objects = arrayAll - fakeAll

// let test = filter(arrayAll, fakeAll)

// let test = filter(arrayAll, (object) => {

//   find(fakeAll, () => {
//     return object
//   })

//   // object fakeAll
// })
// console.log(test)
// console.log(arrayAll, fakeAll)
// console.log(objects)
