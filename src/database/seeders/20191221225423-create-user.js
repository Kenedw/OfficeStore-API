const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, _) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'First Doe',
          cnpj: '12345678912345',
          email: 'first@email.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Second Doe',
          cnpj: '12345678912344',
          email: 'second@email.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, _) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
