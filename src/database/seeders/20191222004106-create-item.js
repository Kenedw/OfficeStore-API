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
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          name: 'Canetas',
          user_id: usersRows[0].id,
          value: 2.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lapis',
          user_id: usersRows[0].id,
          value: 22.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cadeira',
          user_id: usersRows[0].id,
          value: 2112.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teclado',
          user_id: usersRows[0].id,
          value: 212.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Servidor',
          user_id: usersRows[0].id,
          value: 21200.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      { field: ['name', 'user_id', 'create_at', 'update_at'] }
    );
  },

  down: (queryInterface, _) => {
    return queryInterface.bulkDelete('items', null, {});
  },
};