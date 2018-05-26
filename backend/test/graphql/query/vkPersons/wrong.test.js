let query = `
  query vkPersons($input: VkPersonsInput) {
    vkPersons(input: $input) {
      vkPersons {
        ${matchers.vkPerson_attr}
      }
      cursor
      count
    }
  }
`
describe("wrong params given", () => {

  it('should return error', async () => {
    const res = await execGraphql({ query, unauth: true })

    expect(res.errors).toContainEqual(matchers.errors_json)
  })

})
