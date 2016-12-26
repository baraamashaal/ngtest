var faker = require('../../node_modules/faker');

module.exports = function() {
  var data = { users: [] }
    // Create 100 users
  for (var i = 0; i < 100; i++) {
    data.users.push({
      id: i,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    })
  }
  return data
}