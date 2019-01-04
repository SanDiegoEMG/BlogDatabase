module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
<<<<<<< HEAD
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
=======
      body: {
        type: DataTypes.TEXT,
>>>>>>> parent of 2764cd5... moved api routes into sep files - get and post working but without 'require' of files in server.js
        allowNull: false,
        validate: {
          len: [1]
        }
      },
<<<<<<< HEAD
=======
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
>>>>>>> parent of 2764cd5... moved api routes into sep files - get and post working but without 'require' of files in server.js
    });
    return Post;
  };
  