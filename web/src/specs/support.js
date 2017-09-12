import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'store'
import { MemoryRouter } from 'react-router-dom'

export const withProvider = (component, store) => (
  <Provider store={configureStore(store)}>{component}</Provider>
)

export const withRouter = (component) => (
  <MemoryRouter>{component}</MemoryRouter>
)
