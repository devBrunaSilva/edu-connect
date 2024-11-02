import { uuid } from "uuidv4";

type Aluno = {
  id: string;
  nome: string;
  email: string;
  nome_curso: string;
};

const alunos: Aluno[] = [];

class StudentRepository {
  findAll() {}

  create({ nome, email, nome_curso }: Omit<Aluno, "id">): Aluno {
    const newStudent: Aluno = {
      id: uuid(),
      nome,
      email,
      nome_curso,
    };

    alunos.push(newStudent);
    return newStudent;
  }

  update() {}

  delete() {}
}

export default new StudentRepository();

