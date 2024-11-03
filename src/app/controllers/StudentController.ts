import { Request, Response } from 'express'

import StudentRepository from '../repositories/StudentRepository'

class StudentController {
  index(_req: Request, res: Response) {
    const alunos = StudentRepository.findAll()

    res.json(alunos)
  }

  findById(req: Request, res: Response) {
    const { id } = req.params
    const student = StudentRepository.findById(id)

    if (!student) {
      res.status(404).json({ error: 'Aluno não encontrado' })
      return
    }

    res.json(student)
  }

  store(req: Request, res: Response): void {
    const { nome, email, nomeCurso } = req.body

    if (!nome || !email || !nomeCurso) {
      res
        .status(400)
        .json({ error: 'Nome, email e nome do curso são obrigatórios' })
      return
    }

    const newStudent = StudentRepository.create({ nome, email, nomeCurso })
    res.status(201).json(newStudent)
  }

  update(req: Request, res: Response) {
    // Atualizar as informações do aluno
    const { id } = req.params
    const { nome, email, nomeCurso } = req.body

    if (!nome && !email && !nomeCurso) {
      res.status(400).json({
        error: 'É necessário informar ao menos um campo para atualização',
      })
      return
    }

    const student = StudentRepository.findById(id)

    if (!student) {
      res.status(404).json({ error: 'Aluno não encontrado' })
      return
    }

    const updatedStudent = StudentRepository.update(id, {
      nome,
      email,
      nomeCurso,
    })

    res.json(updatedStudent)
  }

  delete(req: Request, res: Response) {
    const { id } = req.params
    const student = StudentRepository.findById(id)

    if (!student) {
      res.status(404).json({ error: 'Aluno não encontrado' })
      return
    }

    const deleted = StudentRepository.delete(id)

    if (!deleted) {
      res.status(404).json({ error: 'Falha ao excluir' })
      return
    }

    res.status(204).send()
  }
}

export default new StudentController()
