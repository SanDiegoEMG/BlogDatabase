module.exports = function (sequelize, DataTypes) {
    var Contributor = sequelize.define("Contributor", {
        // email: DataTypes.STRING,
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 25]
            }
        },
<<<<<<< HEAD
        // last_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false,

        //     validate: {
        //         len: [1, 30]
        //     },
        // },
        // screen_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1, 12]
        //     }
        // },
=======
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 30]
            },
        },
        screen_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 12]
            }
        },
>>>>>>> parent of 2764cd5... moved api routes into sep files - get and post working but without 'require' of files in server.js
        goal_yearly_posts: {
            type: DataTypes.INTEGER,
            validate: {
                len: [1, 700]
            }
        },
    });
    return Contributor;
    };
