import AuthProvider from "src/config/auth_provider"

xdescribe("AuthProvider", () => {
  const token = "token"
  const role = "role"

  describe("#fetchToken", () => {
    it("should return Bearer token", () => {
      AuthProvider.saveToken(token)

      let res = AuthProvider.fetchToken()

      expect(res).toEqual(`Bearer ${token}`)
    })
  })

  describe("#token", () => {
    it("should return token", () => {
      AuthProvider.saveToken(token)

      let res = AuthProvider.token()

      expect(res).toEqual(token)
    })
  })

  describe("#saveToken", () => {
    it("should set token", () => {
      AuthProvider.saveToken(token)

      expect(localStorage.store.credit_site_frontend).toEqual(token)
    })
  })

  // describe("#saveRole", () => {
  //   it("should set role", () => {
  //     AuthProvider.saveRole(role)

  //     expect(localStorage.store.credit_site_frontend_role).toEqual(role)
  //   })
  // })

  describe("#removeToken", () => {
    it("should set role", () => {
      AuthProvider.saveToken(token)
      // AuthProvider.saveRole(role)
      AuthProvider.removeToken()

      expect(localStorage.store).toEqual({})
    })
  })

  describe("#hasLogin", () => {
    it("should return false", () => {
      let res = AuthProvider.hasLogin()

      expect(res).toEqual(false)
    })

    it("should return true", () => {
      AuthProvider.saveToken(token)
      let res = AuthProvider.hasLogin()

      expect(res).toEqual(true)
    })
  })

  // describe("#isAdmin", () => {
  //   it("should return true", () => {
  //     // AuthProvider.saveRole("admin")

  //     let res = AuthProvider.isAdmin()

  //     expect(res).toEqual(true)
  //   })
  //   it("should return false", () => {
  //     // AuthProvider.saveRole("manager")

  //     let res = AuthProvider.isAdmin()

  //     expect(res).toEqual(false)
  //   })
  // })

})
