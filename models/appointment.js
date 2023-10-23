module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('Appointment', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false, 
            primaryKey: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start:{
            type: DataTypes.DATE,
            allowNull:false,

        },
        end:{
            type: DataTypes.DATE,
            allowNull:false,
            
        }
    });

    Appointment.associate = (models) => {
        Appointment.belongsTo(models.Calendar)
    }
    
    return Appointment


}