module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
    //   body: {
    //     type: DataTypes.TEXT,
    //     allowNull: false,
    //     validate: {
    //       len: [1]
    //     }
    //   },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal",
        allowNull: false,
      },
      repost: { 
          type: DataTypes.BOOLEAN, 
          allowNull: false, 
          defaultValue: false },
    });
    return Post;
  };
  