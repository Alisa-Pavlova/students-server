import Student from './models/Student'

const dbInit = () => {
  Student.sync()
}
export default dbInit