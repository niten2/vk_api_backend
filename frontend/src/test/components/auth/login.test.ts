import * as createTestContext from "react-cosmos-test/enzyme"
import fixture from "src/test/__fixtures__/auth/login"

// import AuthProvider from "src/config/auth_provider"

const { mount, getWrapper } = createTestContext({ fixture })

describe("login", async () => {

  beforeEach(mount)

  it('renders text', async () => {
    expect(getWrapper().text()).toContain("admin")
    expect(getWrapper().text()).toContain("source code")
  })

  // TODO
  // it("handleLogin", async () => {

  //   await jest.mock('src/config/auth_provider', () => ({
  //     default: {
  //       saveToken: jest.fn(),
  //       saveRole: jest.fn(),
  //     }
  //   }))

  //   const { mount, getWrapper } = createTestContext({ fixture })

  //   await mount()

  //   await getWrapper('.btn .btn-primary .px-4').simulate('click')


  //   const AuthProvider = require("src/config/auth_provider").default

  //   console.log(AuthProvider.saveToken.mock.calls)
  // })

})
