module.exports = (sequelize, DataTypes) => {
    const Calendar = sequelize.define('Calendar', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false, 
            primaryKey: true
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    });

    Calendar.associate = (models) => {
       Calendar.belongsToMany(models.User,{through: "Role"})
       Calendar.hasMany(models.Appointment)
    }
    
    return Calendar
}