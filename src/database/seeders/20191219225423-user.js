module.exports = {
  up: (queryInterface, _) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Kened Doe',
          cnpj: '81266449000000',
          email: 'kened@email.com',
          password_hash:
            '$2a$08$makjqFvM6n.2Xf4Jd8a7qeGJ7snQhMWnG/CHO.2pImCjIEjzhwSeS',
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
