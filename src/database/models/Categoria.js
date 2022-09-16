module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    codigo: {
      type: DataTypes.STRING
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: DataTypes.INTEGER

  },
    {
      timestamps: false,
      tableName: 'categorias'
    })
  return Categoria;
}