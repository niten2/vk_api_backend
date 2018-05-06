import * as createTestContext from "react-cosmos-test/enzyme"
import fixture from "src/test/__fixtures__/shared/spinner"

const { mount, getWrapper } = createTestContext({ fixture })

describe("text", () => {

  beforeEach(mount)

  it('should be valid', async () => {
    expect(getWrapper().length).toEqual(1)
  })

})
