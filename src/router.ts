const { Router } = require("express");

const StudentController = require("./app/controllers/StudentController")

const router = Router();


//Listar alunos
router.get("/alunos", StudentController.index);

//Cadastrar aluno
router.post("/alunos", StudentController.store );

//Editar dados do aluno
router.put("/alunos/:id", StudentController.update);

//Deletar aluno
router.delete("/alunos/:id", StudentController.delete);


module.exports = router;