import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

export interface IStudent {
  id: number
  name: string
  second_name: string
  surname: string
  performance?: number
  birth: Date
  subjects: string[]
  createdAt?: Date
  updatedAt?: Date
}

export interface IStudentInput extends Optional<IStudent, 'id'> {}

class Student extends Model<IStudent, IStudentInput> implements IStudent {
    public id!: number
    public name!: string
    public second_name!: string
    public surname!: string
    public performance?: number
    public birth: Date
    public subjects!: string[]
    public readonly createdAt?: Date
    public readonly updatedAt?: Date
  }

  Student.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
      },
    second_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    performance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    subjects: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    }
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
  })

  export default Student