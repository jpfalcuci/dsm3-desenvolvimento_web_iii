import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cadastro() {

    const [input, setInput] = useState('');                                             // Estado para armazenar o input do usuário
    const [username, setUsername] = useState(localStorage.getItem('@username') || '');  // Estado para armazenar o nome do usuário
    
    const tarefasStorage = localStorage.getItem('@tarefa'); // Recuperar lista de tarefas do localStorage
    const [tarefas, setTarefas] = useState([                // Estado para armazenar a lista de tarefas
        "Pagar a conta de luz", "Estudar programação", "Enviar tarefa"
    ]);

    const [selectedColor, setSelectedColor] = useState(''); // Estado para armazenar a cor selecionada
    const availableColors = [                               // Lista de cores: https://reactnative.dev/docs/colors
        'aliceblue', 'antiquewhite', 'burlywood', 'cadetblue', 'crimson', 'coral', 'cornflowerblue',
        'darkkhaki', 'darksalmon', 'darkseagreen', 'fuchsia', 'indianred', 'lightblue', 'lightcoral',
        'lightsalmon', 'lightseagreen', 'mistyrose', 'orangered', 'palegoldenrod', 'palevioletred', 'powderblue',
        'skyblue', 'tan', 'thistle', 'tomato', 'wheat'
    ];

    useEffect( () => {  // Efeito para carregar tarefas do localStorage ao iniciar
        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }
    }, []);

    useEffect( () => {  // Efeito para adicionar tarefas ao localStorage quando tarefas mudam
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    }, [tarefas]);

    useEffect( () => {  // Efeito para coletar e adicionar o nome do usuário ao localStorage
        const storedUsername = localStorage.getItem('@username');
        if (!storedUsername) {
            const inputName = prompt('Qual é o seu nome?');
            if (inputName) {
                localStorage.setItem('@username', inputName);
                setUsername(inputName);
            }
        } else {
            setUsername(storedUsername);
        }
    }, []);

    function handleRegistro(e) { // Função para lidar com o registro de novas tarefas
        e.preventDefault();
        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div className="p-4" style={{ backgroundColor: selectedColor, minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '700px', padding: '0 15px' }}>  
                <h1 className="mb-2">Cadastro de Tarefas:</h1>
                {username && <h2 className="mb-3">{username}, sua lista de tarefas:</h2>}

                <form onSubmit={handleRegistro}>
                    <label className="form-label">Nome da tarefa: </label>
                    <input placeholder='Digite uma tarefa' className="form-control mb-2"
                        value={input}
                        onChange={ (e) => setInput(e.target.value) } />
                    <button type='submit' className="btn btn-secondary">Adicionar</button>
                </form><br />

                <ul className="list-group mb-4">
                    {tarefas.map((tarefa, index) => (
                        <li key={index} className="list-group-item">{tarefa}</li>
                    ))}
                </ul>

                <div>
                    <p>Escolha uma cor:</p>
                    {availableColors.map((color, index) => (
                        <label key={index} className="me-3 mb-1">
                            <input type="radio" value={color}
                                checked={selectedColor === color}
                                onChange={(e) => setSelectedColor(e.target.value)}
                                className="form-check-input" /> {color}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
