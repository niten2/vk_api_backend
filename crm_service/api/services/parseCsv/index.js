import R from "ramda"
import { getCsv } from "api/services/files"

import createClient from "./clients"
import createGroup from "./groups"
import createItemTag from "./item_tags"
import createTag from "./tags"

const path  = (name) =>  { return `db/csv/${name}.csv` }

const create = async (fn, path) => {
  const objects = await getCsv(path)
  R.map(fn, objects)
  console.log(`start create ${path}`)
}

create(createClient, path("clients"))
create(createGroup, path("groups"))
create(createTag, path("tags"))
