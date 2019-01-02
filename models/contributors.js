module.exports = function (sequelize, DataTypes){
    var Contributor = sequelize.define("Contributor",{
        email: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        screen_name: DataTypes.STRING,
        goal_yearly_posts: DataTypes.INTEGER
    })
    return Contributor;
}