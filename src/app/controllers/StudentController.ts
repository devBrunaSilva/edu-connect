import { Request, Response } from 'express'

import StudentRepository from '../repositories/StudentRepository'

class StudentController {
  index(_req: Request, res: Response) {
    const alunos = StudentRepository.findAll()

    res.json(alunos)
  }

  store(req: Request, res: Response) {
    // Criar um novo aluno
  }

  update(req: Request, res: Response) {
    // Atualizar as informações do aluno
  }

  delete(req: Request, res: Response) {
    // Excluir um aluno
  }
}

export default new StudentController()
