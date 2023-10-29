# Documentação da API

URL Base: `localhost:3000`

---

## Lista de Cursos

**GET /curso**

Retorna a lista de cursos disponíveis.

Exemplo de solicitação: `localhost:3000/curso`

- Response body:

```json
["Node JS", "JavaScript", "PHP", "React Show", "VueJS"]
```
---

## Lista de Cursos por ID

**GET /curso/id**

Retorna o curso correspondente ao ID fornecido.

Exemplo de solicitação: `localhost:3000/curso/1`

- Response body:

```json
{
  "Node JS"
}
```
---

## Cadastrando um novo Curso

**POST /curso**

Adiciona um novo curso à lista de cursos.

Exemplo de solicitação: `localhost:3000/curso`

- Request body:

```json
{
  "novo_curso": "Lua"
}
```

- Response body:

```json
["Node JS", "JavaScript", "PHP", "React Show", "VueJS", "Lua"]
```
---

## Atualizando um curso existente

**PUT /curso/id**

Atualiza o curso correspondente ao ID fornecido.

Exemplo de solicitação: `localhost:3000/curso/0`

- Request body:

```json
{
  "curso": "Node JS Avançado"
}
```

- Response body:

```json
["Node JS Avançado", "JavaScript", "PHP", "React Show", "VueJS", "Lua"]
```
---

## Deletando um curso existente

**DELETE /curso/id**

Remove o curso correspondente ao ID fornecido.

Exemplo de solicitação: `localhost:3000/curso/5`

- Response body:

```json
{
    "message": "Curso deletado com sucesso"
}
```
