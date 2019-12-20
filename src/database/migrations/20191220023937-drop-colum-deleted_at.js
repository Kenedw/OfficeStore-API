module.exports = {
  up: (queryInterface, _) => {
    return queryInterface.removeColumn('users', 'deleted_at');
  },

  down: () => {},
};
