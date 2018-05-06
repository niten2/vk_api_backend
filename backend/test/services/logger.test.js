import logger from 'app/services/logger'

it("should have not errors", () => {
  expect(logger.info("test")).toEqual(undefined)
})
