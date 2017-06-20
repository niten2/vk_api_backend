// UIStore.search.startAutoSearch(Model)
// UIStore.search.stopAutoSearch()
// UIStore.search.setPage()
// UIStore.search.setDefault()
// UIStore.search.setQueryName()
// UIStore.search.setQueryAsin()
// UIStore.search.setQueryGtin()
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
  // showObjects: true,
  showObjects: false,
  loading: false,
  city: ""
  // page: 1,
  // perPage: 10,
  // searchError: false,
  // totalPages: "",
  // queryName: '',
  // queryAsin: '',
  // queryGtin: '',
  // sorting: "",
})

Object.assign(search, {

  startAutoSearch(model) {
    this.setModel(model)
    this.startPerformSearch()
  },

  startPerformSearch() {
    // autorun(() => { this.performSearch() })
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

	// setPage(newPage) {
	// 	this.page = newPage
	// },

  // setDefault() {
		// transaction(() => {
  //     this.model = ''
  //     this.page = 1
  //     this.loading = false
  //     this.searchError = false
  //     this.totalPages = 1
  //     // this.queryName = ''
  //     // this.queryAsin = ''
  //     // this.queryGtin = ''
  //     // this.sorting = ''
		// })
  // },

  // // query
  // setDefaultQuery() {
		// transaction(() => {
  //     this.queryName = ''
  //     this.queryAsin = ''
  //     this.queryGtin = ''
  //     this.totalPages = 1
  //     this.page = 1
  //     this.loading = false
  //     this.searchError = false
		// })
  // },

	// setQueryName(newValue) {
		// transaction(() => {
			// this.queryName = newValue;
			// this.page = 1
		// })
	// },

	// setQueryAsin(newValue) {
		// transaction(() => {
			// this.queryAsin = newValue;
			// this.page = 1
		// })
	// },

	// setQueryGtin(newValue) {
		// transaction(() => {
			// this.queryGtin = newValue
			// this.page = 1
		// })
	// },

  // setOnlyQueryAsin(newAsin) {
		// transaction(() => {
  //     this.queryName = ''
  //     this.queryAsin = newAsin
  //     this.queryGtin = ''
		// })
  // },

  // setOnlyQueryGtin(newGtin) {
		// transaction(() => {
  //     this.queryName = ""
  //     this.queryAsin = ""
  //     this.queryGtin = newGtin
		// })
  // },

  // setOnlyQueryName(newName) {
		// transaction(() => {
  //     this.queryName = newName
  //     this.queryAsin = ""
  //     this.queryGtin = ''
		// })
  // },

  // // sort
  // setSortingDefault() {
  //   this.sorting = ""
  // },
  // getSortingIcon(value) {
  //   let icon
  //   switch (this.sorting) {
  //     case `${value} ASC`: icon = "fa fa-fw fa-sort-asc"
  //     break
  //     case `${value} DESC`: icon = "fa fa-fw fa-sort-desc"
  //     break
  //     default : icon = "fa fa-fw fa-sort"
  //   }
  //   return icon
  // },
  // setSorting(value) {
  //   if (this.sorting == `${value} ASC` || this.sorting == "") {
  //     this.sorting = `${value} DESC`
  //   } else if (this.sorting == `${value} DESC`) {
  //     this.sorting = `${value} ASC`
  //   } else {
  //     this.sorting = `${value} ASC`
  //   }
  // },

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
  // "setPage",
  // "setSortingDefault",
  // "getSortingIcon",
  // "setSorting",
  // "setOnlyQueryAsin",
  // "setOnlyQueryGtin",
  // "setOnlyQueryName",
	// 'setQueryName',
	// 'setQueryAsin',
	// 'setQueryGtin',
  // "setDefault",
  // "setDefaultQuery",
])
