import createQuery from "api/services/createQuery"

describe('Testing', () => {

  it('test', async () => {


    let zz = {
      "query": {
        "page": {
          "number": 2,
          "size": 50,
        },
        "include": "tag",
      }
    }

    let aa = createQuery(zz)
    console.log(aa)

  })

})

