module.exports = {
  up: function (queryInterface, Sequelize) {

      const result = Array.from(Array(50)).map(() => {

        return {
          name: "Olya",
          number: 111,
          phone: 89135000150,
          date_birth: "22 03",
          note: "active",
          status_id: 1
        }

      })

    return queryInterface.bulkInsert('clients', result, {})
  },

}
