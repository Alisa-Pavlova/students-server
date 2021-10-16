import { Router } from 'express'
import studentsRouter from './students/controller'

const router = Router()

router.use('/students', studentsRouter)

export default router