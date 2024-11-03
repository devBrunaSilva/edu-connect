import { Request, Response } from "express";
import StudentRepository from "../repositories/StudentRepository";

class StudentController {
  index(_req: Request, res: Response) {
    const alunos = StudentRepository.findAll();

    res.json(alunos);
  }

  store(req: Request, res: Response): void {
    const { nome, email, nome_curso } = req.body;

    if (!nome || !email || !nome_curso) {
      res
        .status(400)
        .json({ error: "Nome, email e nome do curso são obrigatórios" });
      return;
    }

    const newStudent = StudentRepository.create({ nome, email, nome_curso });
    res.status(201).json(newStudent);
  }

  update(req: Request, res: Response) {
    // Atualizar as informações do aluno
  }

  delete(req: Request, res: Response) {
    // Excluir um aluno
  }
}

export default new StudentController();
