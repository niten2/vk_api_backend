import * as createTestContext from "react-cosmos-test/enzyme"
import fixture from "src/test/__fixtures__/profile/index"

const { mount, getWrapper } = createTestContext({ fixture })

xdescribe("text", async () => {

  beforeEach(mount)

  it('renders text', async () => {
    expect(getWrapper().text()).toContain("Profile")
    expect(getWrapper().text()).toContain("Save")
  })

})
