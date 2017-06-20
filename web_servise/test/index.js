import jsdom from 'jsdom'

// Load application environment in to `process.env`
require('dotenv').config()

// Setup the simplest document possible
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>', {
  url: process.env.ASSETS_HOST
})

// Get the window object out of the document
const win = doc.defaultView

// Set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc
global.window = win
global.navigator = { userAgent: 'node.js'}

// Take all properties of the window object and also attach it to the
// mocha global object.
for (let key in win) {
  if (!win.hasOwnProperty(key)) continue
  if (key in global) continue
  global[key] = win[key]
}

// Run tests
describe("CrossClearance Frontend", function() {
  require('./views')
})
