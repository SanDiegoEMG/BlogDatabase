module.exports = function (sequelize, DataTypes) {
    var Contributor = sequelize.define("Contributor", {
        email: DataTypes.STRING,
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 25]
            }
        },
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
        goal_yearly_posts: {
            type: DataTypes.INTEGER,
            validate: {
                len: [1, 700]
            }
        },
    });
    return Contributor;
    };
