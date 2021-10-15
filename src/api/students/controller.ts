import { IFilters } from "interfaces"
import Student, { IStudent, IStudentInput } from "db/models/Student"
import { Op } from 'sequelize'

export const getAll = async(filters: IFilters): Promise<IStudent[]> => {
  return await Student.findAll({
    where: {
    ...(filters.name && { name: filters.name}),
    ...(filters.surname && { surname: filters.surname}),
    ...(filters.second_name && { second_name: filters.second_name}),
    ...(filters.birth && { birth: filters.birth}),
    ...(filters.perfomance && { birth: filters.perfomance}),
    ...(filters.subject && { subjects: { [Op.contains]: [filters.subject] }}),
  },
    ...(filters.limit && { limit: filters.limit }),
    ...(filters.offset && { offset: filters.offset * filters.limit }),
  })
}

export const getById = async(id: number): Promise<IStudent> => {
  const foundStudent = await Student.findByPk(id)
  if (!foundStudent) {
    throw new Error('Student not found')
  }
  return foundStudent
}

export const create = async(student: IStudentInput): Promise<IStudent> => {
  return await Student.create(student)
}

export const update = async(id: number, student: IStudentInput): Promise<IStudent> => {
  const foundStudent = await Student.findByPk(id)
  if (!foundStudent) {
    throw new Error('Student not found')
  }
  return await foundStudent.update(student)
}

export const deleteById = async(id: number): Promise<boolean> => {
  const deletedStudentCount = await Student.destroy({
    where: { id }
  })
  return !!deletedStudentCount
}