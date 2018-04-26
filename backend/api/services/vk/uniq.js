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
