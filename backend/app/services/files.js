import fs  from "fs"
import csv from "papaparse"

export const getFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function(err, data){
       if (err) {
         reject(err)
       } else {
         resolve(data)
       }
    })
  })
}

export const getJson = (path) => {
  return getFile(path).then(data => {
    return JSON.parse(data)
  })
}

export const getCsv = async (path) => {
  return getFile(path).then(data => {
    return csv.parse(
      data,
      { header: true }
    ).data
  })
}
