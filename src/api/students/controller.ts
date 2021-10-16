import { IStudentInput } from 'db/models/Student'
import { Router, Request, Response } from 'express'
import { getAll, create, update, deleteById, getById } from './repository'
import { IFilters } from 'interfaces'

const studentsRouter = Router()

studentsRouter.get('/', async (req: Request, res: Response) => {
    const filters: IFilters = req.query || {}
    const result = await getAll(filters)

    return res.status(200).send(result)
})

studentsRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await getById(id)

    return res.status(200).send(result)
})

studentsRouter.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const student: IStudentInput = req.body
    const result = await update(Number(id), student)

    return res.status(200).send(result)
})

studentsRouter.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await deleteById(Number(id))

    return res.status(204).send(result)
})

studentsRouter.post('/', async (req: Request, res: Response) => {
    const student: IStudentInput = req.body
    const result = await create(student)

    return res.status(201).send(result)
})

export default studentsRouter