import { extendObservable, transaction } from 'mobx'
import { autorun } from 'mobx'
import { SearchStore } from 'stores'

import uniqueId from 'lodash/uniqueId'
import debounce from 'lodash/debounce'
import bindAll from 'lodash/bindAll'

const HEADER_SESSION_TOKEN = 'X-DreamFactory-Session-Token'
import authProvider from 'lib/auth'
import { User } from "models"

let search  = {
  model: {},
  searchId: uniqueId('search_')
}

extendObservable(search, {
  showObjects: false,
  loading: false,
  city: ""
})

Object.assign(search, {

  startAutoSearch(model) {
    this.setModel(model)
    this.startPerformSearch()
  },

  startPerformSearch() {
    let debouncedSearch = debounce(this.performSearch, 1000)
    this.disposeSearch = autorun(() => {
      let action
      if (this.previousQuery !== this.query) {
        action = debouncedSearch
      } else {
        action = this.performSearch
      }
      action()
      this.previousQuery = this.query
    })
  },

  stopAutoSearch() {
    this.disposeSearch()
  },

  performSearch(attributes = {}) {
    let { setLastPage } = attributes
    let { city } = this
    // let { page, perPage } = this

    transaction(() => {
      this.loading = true
      this.searchError = false
    })

    this.model.search( this.searchId, {
      city,
      // page,
      // perPage,
    }).then(response => {
      if (setLastPage) {
        transaction(() => {
          this.page = this.totalPages
          this.loading = false
          this.searchError = !response.ok
        })
      } else {
        transaction(() => {
          this.loading = false
          this.searchError = !response.ok
        })
      }
      return true
    })
  },

  getSearchResults() {
    return SearchStore.get(this.searchId)
  },

	setCity(value) {
		transaction(() => {
      this.showObjects = true
      this.city = value
    })
	},

	setDefault() {
		transaction(() => {
      this.showObjects = true
      this.city = ""
    })
	},

	setModel(model) {
		this.model = model
	},

  setPerPage(newPage) {
		transaction(() => {
      this.page = 1
      this.perPage = newPage
		})
  },

})

export default bindAll(search, [
  "startAutoSearch",
  "startPerformSearch",
  "performSearch",
  "stopAutoSearch",
  "getSearchResults",
  "setModel",
  "setCity",
  "setDefault",
])
