module.exports = function(sequelize, DataTypes) {
  let cafe = sequelize.define(
    'cafe',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telephone: {
        type: DataTypes.STRING
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      detailCategory: {
        type: DataTypes.STRING
      },
      smokingRoom: {
        type: DataTypes.TINYINT(1)
      },
      parkingLot: {
        type: DataTypes.TINYINT(1)
      }
    },
    {
      timestamps: true,
      underscored: false,
      freezeTableName: true,
      tableName: 'cafe'
    }
  );
  cafe.associate = function(models) {
    cafe.hasMany(models.comments);
    cafe.hasMany(models.images);
    cafe.belongsToMany(models.users, { through: models.userLikeCafe });
  };
  return cafe;
};