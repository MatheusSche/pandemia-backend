import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';
import Ong from '../app/models/Ong';
import Appointment from '../app/models/Appointment';
import databaseConfig from '../config/database';

const models = [User, File, Ong, Appointment];

class Database {
  
  constructor(){
    this.init();
  }
  
  init(){
    this.connection = new Sequelize(databaseConfig);

    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();