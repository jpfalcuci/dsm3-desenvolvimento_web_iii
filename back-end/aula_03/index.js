const express = require('express');
const server = express();
server.use(express.json());

// CRUD - Create, Read, Update, Delete

const cursos = ['NodeJS', 'JavaScript', 'PHP', 'React Native', 'VueJS'];

// Middleware global
server.use((req, res, next) => {
    console.log(`URL: ${req.url} - Method: ${req.method}`);
    return next();
});

// Middleware local (específico para tratar INSERT de novos cursos)
function checkCurso(req, res, next) {
    if (!req.body.novo_curso) {
        return res.status(400).json({error: "Nome do curso é obrigatório no formato JSON: {'novo_curso': 'Nome do curso'"});
    }

    return next();
}

// Middleware local (específico para cursos que não existem)
function checkIDCurso(req, res, next) {
    const curso = cursos[req.params.index];
    if (!curso) {
        return res.status(400).json({error: "Curso não existe no ID solicitado"});
    }

    return next();
}

// Middleware local (específico para tratar UPDATE de cursos)
function checkCursoUpdate(req, res, next) {
    if (!req.body.curso) {
        return res.status(400).json({error: "Nome do curso é obrigatório no formato JSON: {'curso': 'Nome do curso'"});
    }

    return next();
}

// Middleware local (verificar se o curso existe no índice fornecido)
function checkIDCursoForDelete(req, res, next) {
    const { index } = req.params;
    if (!cursos[index]) {
        return res.status(400).json({ error: "Curso não existe no ID solicitado" });
    }

    return next();
}

// Middleware local (exibir a lista de cursos atualizada)
function logCursos() {
    console.log(`Lista de cursos atualizada: ${cursos}`);
}

// Select
server.get('/curso', (req, res) => {
    return res.json(cursos);
});

// Select com ID
server.get('/curso/:index', checkIDCurso, (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

// Insert de um curso
server.post('/curso', checkCurso, (req, res) => {
    const { novo_curso } = req.body;
    cursos.push(novo_curso);

    logCursos();

    return res.json(cursos);
});

// Update de um curso
server.put('/curso/:index', checkIDCurso, checkCursoUpdate, (req, res) => {
    const { index } = req.params;
    const { curso } = req.body;

    cursos[index] = curso;

    logCursos();

    return res.json(cursos);
});

// Delete de um curso
server.delete('/curso/:index', checkIDCursoForDelete, (req, res) => {
    const { index } = req.params;
    cursos.splice(index, 1);

    logCursos();

    return res.json({message: 'Curso deletado com sucesso!'});
});


server.listen(3000);
