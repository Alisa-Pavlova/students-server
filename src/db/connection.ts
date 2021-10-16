import { Sequelize } from 'sequelize'
import { dbHost, dbName, dbPassword, dbUser, dbPort } from 'config'

const sequelizeConnection = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`)

export default sequelizeConnection