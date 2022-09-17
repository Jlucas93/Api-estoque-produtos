module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idCategoria: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categorias',
        key: 'id'
      },
      allowNull: true
    },
    codigo: DataTypes.STRING,
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: DataTypes.TEXT,
    valor: DataTypes.DECIMAL,
    status: DataTypes.INTEGER

  },
    {
      timestamps: false,
      tableName: 'produtos'
    })
  return Produto;
}