import { IStudent } from 'db/models/Student'

export interface IFilters {
  name?: string
  surname?: string
  second_name?: string
  birth?: Date
  performance?: number
  subjects?: string
  limit?: number
  offset?: number
}

export interface IStudentCount {
  rows: IStudent[]
  count: number
}