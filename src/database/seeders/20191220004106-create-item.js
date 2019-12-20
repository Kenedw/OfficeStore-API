module.exports = {
  up: async (queryInterface, _) => {
    const users = await queryInterface.sequelize.query(`SELECT id from users;`);

    const usersRows = users[0];

    return queryInterface.bulkInsert(
      'items',
      [
        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, _) => {
    return queryInterface.bulkDelete('items', null, {});
  },
};
