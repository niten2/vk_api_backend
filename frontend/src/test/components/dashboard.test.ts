import * as createTestContext from "react-cosmos-test/enzyme"
import fixture from "src/test/__fixtures__/dashboard"

const { mount, getWrapper } = createTestContext({ fixture })

describe("text", () => {

  beforeEach(mount)

  it('renders Description', async () => {
    expect(getWrapper().text()).toContain("Description")
  })

})
