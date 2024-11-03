import { uuid } from 'uuidv4'

type Student = {
  id: string
  nome: string
  email: string
  nomeCurso: string
}

const students: Student[] = []

class StudentRepository {
  findAll() {
    return students
  }

  findById(id: string) {
    return students.find((student) => student.id === id)
  }

  create({ nome, email, nomeCurso }: Omit<Student, 'id'>): Student {
    const newStudent: Student = {
      id: uuid(),
      nome,
      email,
      nomeCurso,
    }

    students.push(newStudent)
    return newStudent
  }

  update(id: string, { nome, email, nomeCurso }: Omit<Student, 'id'>) {
    const studentIndex = students.findIndex((student) => student.id === id)

    if (studentIndex < 0) {
      return null
    }

    students[studentIndex] = {
      id,
      nome: nome || students[studentIndex].nome,
      email: email || students[studentIndex].email,
      nomeCurso: nomeCurso || students[studentIndex].nomeCurso,
    }

    return students[studentIndex]
  }

  delete(id: string): boolean {
    const studentIndex = students.findIndex((student) => student.id === id)
    if (studentIndex === -1) {
      return false
    }

    students.splice(studentIndex, 1)
    return true
  }
}

export default new StudentRepository()
