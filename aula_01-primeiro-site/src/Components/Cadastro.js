import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');

    function handleRegistro(event) {
        event.preventDefault();
        setNome(event.target.nome.value);
        setEmail(event.target.email.value);
        setIdade(event.target.idade.value);
    }

    return (
        <div className="container mt-4 bg-dark text-light p-4" style={{ maxWidth: '500px', margin: '0 auto', padding: '0 15px' }}>
            <h1 className="mb-4">Cadastro</h1>
            <form onSubmit={handleRegistro}>
                <div className="mb-3">
                    <label className="form-label">Nome:</label>
                    <input type="text" name="nome" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" name="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Idade:</label>
                    <input type="text" name="idade" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Registro</button>
            </form>
            <br />
            <h3>Nome: {nome}</h3>
            <h3>Email: {email}</h3>
            <h3>Idade: {idade}</h3>
        </div>
    );
}

export default Cadastro;
