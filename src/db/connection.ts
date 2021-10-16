import { Sequelize } from 'sequelize'
import { dbHost, dbName, dbPassword, dbUser } from 'config'

const sequelizeConnection = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}:5432/${dbName}`)

export default sequelizeConnection