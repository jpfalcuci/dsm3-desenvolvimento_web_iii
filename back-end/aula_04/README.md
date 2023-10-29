# Documentação da API

URL Base: `localhost:3000`

---

## Lista de Funcionários

**GET /funcionario**

Retorna a lista de funcionários cadastrados.

Exemplo de solicitação: `localhost:3000/funcionario`

- Response body:

```json
[
    {
        "_id": "615f7e18686a3e1b521266ab",
        "nome": "João",
        "cargo": "Desenvolvedor",
        "salario": 15000,
        "contratado": true,
        "__v": 0
    },
    {
        "_id": "615f7e1f686a3e1b521266ac",
        "nome": "Duda",
        "cargo": "Designer",
        "salario": 15000,
        "contratado": true,
        "__v": 0
    }
]
```

---

## Detalhes de um Funcionário por ID

**GET /funcionario/id**

Retorna os detalhes do funcionário correspondente ao ID fornecido.

Exemplo de solicitação: `localhost:3000/funcionario/615f7e18686a3e1b521266ab`

- Response body:

```json
{
    "_id": "615f7e18686a3e1b521266ab",
    "nome": "João",
    "cargo": "Desenvolvedor",
    "salario": 15000,
    "contratado": true,
    "__v": 0
}
```

---

## Cadastrando um novo Funcionário

**POST /funcionario**

Adiciona um novo funcionário à lista de funcionários.

Exemplo de solicitação: `localhost:3000/funcionario`

- Request body:

```json
{
    "nome": "John",
    "cargo": "Analista de Dados",
    "salario": 9000,
    "contratado": true
}
```

- Response body:

```json
{
    "message": "Funcionário criado com sucesso!"
}
```

---

## Atualizando um Funcionário existente

**PUT /funcionario/id**

Atualiza os detalhes do funcionário correspondente ao ID fornecido.

Exemplo de solicitação: `localhost:3000/funcionario/615f7e18686a3e1b521266ab`

- Request body:

```json
{
    "nome": "João Paulo",
    "cargo": "Arquiteto de Software",
    "salario": 19000,
    "contratado": true
}
```

- Response body:

```json
{
    "_id": "615f7e18686a3e1b521266ab",
    "nome": "João Paulo",
    "cargo": "Arquiteto de Software",
    "salario": 19000,
    "contratado": true,
    "__v": 0
}
```

---

## Deletando um Funcionário existente

**DELETE /funcionario/id**

Remove o funcionário correspondente ao ID fornecido.

Exemplo de solicitação: `localhost:3000/funcionario/615f7e18686a3e1b521266ab`

- Response body:

```json
{
    "message": "Funcionário deletado com sucesso!"
}
```
