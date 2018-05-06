import * as createTestContext from "react-cosmos-test/enzyme"
import fixture from "src/test/__fixtures__/shared/sidebar/manager"

const { mount, getWrapper } = createTestContext({ fixture })

describe("", () => {

  beforeEach(mount)

  it('should not have users', async () => {
    expect(getWrapper().text()).not.toContain("Users")
  })

})
