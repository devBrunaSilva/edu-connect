import { Request, Response } from "express";

class StudentController {
  index(req: Request, res: Response) {
    // Listar os alunos
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

module.exports = new StudentController();