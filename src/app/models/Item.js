import Sequelize, { Model } from 'sequelize';

class Item extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        value: Sequelize.FLOAT,
        user_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Item;
