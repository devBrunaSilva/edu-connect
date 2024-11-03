import { uuid } from "uuidv4";

type Aluno = {
  id: string;
  nome: string;
  email: string;
  nome_curso: string;
};

const alunos: Aluno[] = [];

class StudentRepository {
  findAll() {
    return alunos;
  }

  findById(id: string) {
    return alunos.find((aluno) => aluno.id === id);
  }

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

  update(id: string, { nome, email, nome_curso }: Omit<Aluno, "id">) {
    const studentIndex = alunos.findIndex((aluno) => aluno.id === id);

    if (studentIndex < 0) {
      return null;
    }

    alunos[studentIndex] = {
      id,
      nome: nome || alunos[studentIndex].nome,
      email: email || alunos[studentIndex].email,
      nome_curso: nome_curso || alunos[studentIndex].nome_curso,
    };

    return alunos[studentIndex];
  }

  delete() {}
}

export default new StudentRepository();
