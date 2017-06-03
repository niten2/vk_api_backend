import { API, BaseModel } from 'mobx-model'
import Notification from 'notification'
import { UIStore, SearchStore } from 'stores'
import * as models from 'models'
import authProvider from 'lib/auth'
import { Deserializer, Serializer } from 'lib/serializer'
import uniqueId from 'lodash/uniqueId'
import { snakeCase } from "lodash"
import pluralize from "pluralize"

const HEADER_SESSION_TOKEN='Authorization'

BaseModel.getModel = (modelName) => { return models[modelName] }
BaseModel.getName = function() { pluralize(snakeCase(this.name)) }

BaseModel.toJson = function() {
  let json = { id: this.id }
  Object.keys(this.attributes).forEach(attrName => {
    json[attrName] = this[attrName]
  })
  return json
}

BaseModel.addClassAction('loadAll', function(attributes = {}) {
  API.requestHeaders[HEADER_SESSION_TOKEN] = authProvider.fetchToken()
  return API.request({
    data: attributes,
    endpoint: this.urlRoot,
    onSuccess: async (response) => {
      // console.log(response)
      let models = response.body
      models.forEach( modelJson => { this.set({ modelJson }) })
    }
  })
})

BaseModel.addClassAction('load', function(id) {
  API.requestHeaders[HEADER_SESSION_TOKEN] = authProvider.fetchToken()
  return API.request({
    endpoint: `${this.urlRoot}/${id}`,
    onSuccess: async (response) => {
      // let modelJson = await Deserializer(response.body)
      this.set({ modelJson })
    }
  })
})

BaseModel.addClassAction('create', function(attributes = {}) {
  // let data = await Serializer(name, attributes)
  API.requestHeaders[HEADER_SESSION_TOKEN] = authProvider.fetchToken()
  return API.request({
    method: 'post',
    data: attributes,
    endpoint: this.urlRoot,
    onSuccess: (response) => {
      this.set({ modelJson: response.body })
    },
  })
})

BaseModel.addAction('update', async function(attributes = {}) {
  let name = pluralize(snakeCase(this.constructor.name))
  let data = await Serializer(name, attributes)
  // console.log(data)

  return API.request({
    method: 'put',
    data: data,
    endpoint: `${this.urlRoot}/${this.id}`,
    onSuccess: async (response) => {
      let modelJson = await Deserializer(response.body)
      this.set({ modelJson })
    },
  })
})

BaseModel.addAction('destroy', function() {
  return API.request({
    method: 'del',
    endpoint: `${this.urlRoot}/${this.id}`,
    onSuccess: (response) => {
      this.onDestroy()
    },
  })
})

// BaseModel.addClassAction('search', function(searchId, attributes = {}) {
//   let { page, perPage } = attributes
//   let offset
//   page == 1 ? offset = 0 : offset = (page - 1) * perPage

//   API.requestHeaders[HEADER_SESSION_TOKEN] = authProvider.fetchToken()
//   return API.request({
//     method: 'get',
//     data: {},
//     endpoint: `${this.urlRoot}?limit=${perPage}&include_count=true&offset=${offset}`,
//     onSuccess: (response) => {
//       response.body.resource.forEach(modelJson => {
//         this.set({ modelJson })
//       })
//       // set search results
//       SearchStore.set(searchId, {
//         results: response.body.resource.map( object => object.id),
//       })
//       let count = response.body.meta.count
//       let totalPages = Math.ceil(count / perPage)
//       UIStore.search.totalPages = String(totalPages)
//     },
//   })
// })

