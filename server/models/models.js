const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Doctor = sequelize.define('doctor', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	first_name: { type: DataTypes.STRING },
	middle_name: { type: DataTypes.STRING },
	last_name: { type: DataTypes.STRING },
	type: { type: DataTypes.ENUM('Терапевт', 'Педиатр', 'Кардиолог') },
	avatar: { type: DataTypes.STRING },
	description: { type: DataTypes.STRING },
	experience: { type: DataTypes.STRING },
})
const Service = sequelize.define('service', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING },
	type: { type: DataTypes.ENUM('Терапевт', 'Педиатр', 'Кардиолог') },
	price: { type: DataTypes.STRING },
	description: { type: DataTypes.STRING },
	duration: { type: DataTypes.STRING },
})

const Application = sequelize.define('application', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	full_name: { type: DataTypes.STRING },
	email: { type: DataTypes.STRING },
	date_time: { type: DataTypes.STRING },
	birthday: { type: DataTypes.STRING },
	comment: { type: DataTypes.STRING },
})


Doctor.belongsToMany(Service, { through: 'Doctor_Service' })
Service.belongsToMany(Doctor, { through: "Doctor_Service" });

Doctor.hasMany(Application);
Application.belongsTo(Doctor);

Service.hasMany(Application);
Application.belongsTo(Service)

module.exports = {
	Doctor,
	Service,
	Application,
	
}
