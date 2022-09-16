module.exports = (sequelize, DataTypes) => {
  const Estoque = sequelize.define('Estoque', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idProduto: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Produtos',
        key: 'id'
      },
      allowNull: false
    },
    quantidade: DataTypes.INTEGER,
    reserva: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  },
    {
      timestamps: false,
      tableName: 'estoque'
    })
  return Estoque;
}