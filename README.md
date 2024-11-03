<h1> 🎓 EDUCONNECT API</h1>

<p align="center">
 API RESTful construída com Express.js, projetada para facilitar o gerenciamento de informações de alunos, com operações CRUD completas e uma estrutura modular que torna o código organizado e fácil de manter.
</p>

---

<p align="center">
 <a href="#started">Primeiros Passos</a> •
 <a href="#endpoints">Endpoints</a> •
 <a href="#colab">Colaboradores</a> •
 <a href="#contribute">Contribua</a>
</p>


### Principais funcionalidades:

- **Cadastro de Alunos**: Permite adicionar novos alunos com nome, e-mail e curso
- **Listagem de Alunos**: Exibe uma lista completa de alunos cadastrados.
- **Consulta por ID**: Recupera informações específicas de um aluno.
- **Atualização de Dados**: Permite a modificação dos dados de um aluno.
- **Exclusão de Alunos**: Remove alunos do sistema por meio do ID.

<h2 id="started">🚀 Primeiros Passos</h2>

<h3>Pré-requisitos</h3>

- [NodeJS](https://nodejs.org/en/download/package-manager)
- [ExpressJS](https://expressjs.com/en/starter/installing.html)
- [Git](https://git-scm.com/downloads)

<h3>Clonando</h3>

Como clonar o projeto:

```bash
git clone git@github.com:devBrunaSilva/edu-connect.git
```
Acesse a pasta do projeto clonado:
```bash
cd edu-connect
```

<h3>Iniciando</h3>

Instale as dependências::
```bash
npm install
```

Execute a aplicação:
```bash
npm run dev
```

Acesse a API em: http://localhost:3001

<h2 id="technologies">💻 Tecnologias</h2>

- node
- express

<h2 id="endpoints">📌 Endpoints</h2>

### **Criar Aluno**
`POST /alunos`  
Cria um novo aluno.

**Corpo da Requisição:**
```json
{
  "nome": "John Doe",
  "email": "john_doe@mail.com",
  "nomeCurso": "sistemas de informação"
}
```

---

### **Listar Alunos**
`GET /alunos`  
Retorna todos as alunos cadastrados.

---
### **Atualizar Aluno**
`GET /alunos/:id`  
Retorna um aulno específico cadastrado.

---
### **Atualizar Aluno**
`PUT /alunos/:id`  
Atualiza um aluno existente.

**Corpo da Requisição:**
```json
{
  "nome": "John Doe",
  "email": "john_doe@mail.com",
  "nomeCurso": "sistemas de informação"
}
```

---

### **Deletar Aluno**
`DELETE /alunos/:id`  
Remove um aluno pelo ID.

---


<h2 id="colab">🤝 Colaboradores</h2>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/devBrunaSilva">
        <img src="https://avatars.githubusercontent.com/u/96504509?v=4" width="100px;" alt="Bruna Silva Profile Picture"/><br>
        <sub>
          <b>Bruna Silva</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/franklinrms">
        <img src="https://avatars.githubusercontent.com/u/88167195?v=4" width="100px;" alt="Franklin Ramos Profile Picture"/><br>
        <sub>
          <b>Franklin Ramos</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/GabrielAndradeSD">
        <img src="https://avatars.githubusercontent.com/u/180300997?v=4" width="100px;" alt="Gabriel Andrade Profile Picture"/><br>
        <sub>
          <b>Gabriel Andrade</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/patrickmps">
        <img src="https://avatars.githubusercontent.com/u/58093259?v=4" width="100px;" alt="Patrick Mota Profile Picture"/><br>
        <sub>
          <b>Patrick Mota</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/robsonsst">
        <img src="https://avatars.githubusercontent.com/u/83371170?v=4" width="100px;" alt="Robson Santos Profile Picture"/><br>
        <sub>
          <b>Robson Santos</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/euyasmin">
        <img src="https://avatars.githubusercontent.com/u/133703149?v=4" width="100px;" alt="Yasmin Miranda Profile Picture"/><br>
        <sub>
          <b>Yasmin Miranda</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


<h2 id="contribute">📫 Contribua</h2>

Contribuições são sempre bem-vindas! Se você deseja ajudar a melhorar o Listy, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção de bug: `git checkout -b feature/nome-da-feature`.
3. Implemente sua solução seguindo os padrões de código do projeto.
4. Faça commits claros e descritivos: `git commit -m "Descrição da mudança"`
5. Envie sua branch: `git push origin -u feature/nome-da-feature`
6. Abra um Pull Request explicando a mudança proposta e, se aplicável, inclua capturas de tela das modificações visuais.

Agradecemos por suas contribuições e por ajudar a melhorar o EduConnect

<h3>Documentações que podem ajudar</h3>

[📝 Como criar um Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Padrões de commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)