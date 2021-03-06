module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
                allowNull: false,
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
        defaultValue: "Personal"
      },

      repost: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
    });
    return Post;
  };
  