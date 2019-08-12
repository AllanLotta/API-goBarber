module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE', // caso seja feita alteração no file ela será feita também na tabela de users
      onDelete: 'SET NULL', // caso o file seja deletado o campo 'avatar_id' sera setado como NULL
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
