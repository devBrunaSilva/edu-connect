type Aluno = {
  id: string
  nome: string
  email: string
  nome_curso: string
}

const alunos: Aluno[] = [{ id: '', nome: '', email: '', nome_curso: '' }]

class StudentRepository {
  findAll() {
    return alunos
  }

  create() {}

  update() {}

  delete() {}
}

export default new StudentRepository()
