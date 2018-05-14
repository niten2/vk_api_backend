describe("attributes", () => {
  it("should have attributes", async () => {
    let user = await factory.create('user')

    expect(user).toEqual(matchers.user_db)
  })
})
