import * as createTestContext from "react-cosmos-test/enzyme"
import fixture from "src/test/__fixtures__/shared/sidebar/admin"

const { mount, getWrapper } = createTestContext({ fixture })

describe("text", () => {

  beforeEach(mount)

  it('should have users', async () => {
    expect(getWrapper().text()).toContain("Users")
  })

})
