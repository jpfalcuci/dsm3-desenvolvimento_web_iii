const express = require('express');
const server = express();
server.use(express.json());


// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request body = { nome: 'NodeJS', tipo: 'Backend' }
// localhost:3000/curso/201?nome=JavaScript

/* server.get('/curso/:id', (req, res) => {
    const nome = req.query.nome;
    const id = req.params.id;

    return res.json({ curso: `${id}`, nome: `${nome}` });
}); */


// CRUD - Create, Read, Update, Delete

const cursos = ['NodeJS', 'JavaScript', 'PHP', 'React Native', 'VueJS'];

// Select
server.get('/curso', (req, res) => {
    return res.json(cursos);
});

// Select com ID
server.get('/curso/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

// Insert de um curso
server.post('/curso', (req, res) => {
    const { novo_curso } = req.body;
    cursos.push(novo_curso);

    return res.json(cursos);
});

// Update de um curso
server.put('/curso/:index', (req, res) => {
    const { index } = req.params;
    const { curso } = req.body;

    cursos[index] = curso;

    return res.json(cursos);
});

// Delete de um curso
server.delete('/curso/:index', (req, res) => {
    const { index } = req.params;
    cursos.splice(index, 1);

    return res.json({message: 'Curso deletado com sucesso!'});
});


server.listen(3000);
