# OfficeStore - API

Api responsável por servir o OfficeStore-WEB, criado com NodeJs e ExpressJs, utilizando o ORM sequelize com postgres alem autenticação OAuth2.

# Autenticação

A apricação utiliza autenticação do tipo Bearer Token, que deve ser incluída no header das requisições.

`Authorization: Bearer <token>`

# Rotas (endpoints)

Descrição das rotas disponiveis na api, no modelo:

`<metodo> <autenticada?> Titulo - URL - params - body`

Em toda requisição autenticada 👮, deve conter o token de autenticação capturado na rota de autenticação.

### `GET` Status do servidor `http://baseURL/api/v1/`
- Sem parâmetros
- Sem corpo
&nbsp;
### `POST` Autenticação `http://baseURL/api/v1/auth/signin`
 - Sem Parâmetro
 - Corpo:
```CS
 {
 	"email": <string> <opcional se existir cnpj>,
 	"cnpj": <string> <opcional se existir email>,
	"password": <string> <obrigatório>,
 }
 ```
&nbsp;
### `GET` Buscar usuario pelo ID `http://baseURL/api/v1/user/:id`
- Sem parâmetros
- Sem corpo

&nbsp;

### `POST` Cria novo usuario `http://baseURL/api/v1/user`
- Sem parâmetros
- Corpo:
```CS
{
	"name":<string> <obrigatório>,
	"email":<string> <obrigatório>,
	"cnpj":<string> <obrigatório>,
	"password":<string> <obrigatório>,
}
```
&nbsp;
### `PUT` `👮` Atualiza usuario `http://baseURL/api/v1/user`
- Sem parâmetros
- Corpo:
```CS
{
	"name":<string>,
	"email":<string>,
	"cnpj":<string>,
	"password":<string>,
	"confirmPassword":<string> <obrigatório se possuir password>,
	"oldPassword":<string> <obrigatório se possuir password>,
}
```
&nbsp;
### `DELETE`  `👮` Deleta usuario `http://baseURL/api/v1/user`
- Sem parâmetros
- Sem corpo

&nbsp;
### `GET`  `👮` Busca item `http://baseURL/api/v1/item`
- Parâmetros:

| Query | Tipo | Descrição | Padrão |
| ------------ | ------------ | ------------ | ------------ |
| page | `<inteiro>` | parâmetro de paginação | 1
| per_page | `<inteiro>` | numero de item por pagina | 1 |
| search | `<string>` | pesquisa item por nome ou cnpj | `<null>` |

- Sem corpo

&nbsp;
### `POST`  `👮` Cria novo item `http://baseURL/api/v1/item`
- Sem parâmetros
- Corpo:
```CS
{
  "name":<string> <obrigatório>
  "value":<float> <obrigatório>
}
```
&nbsp;

### `PUT`  `👮` Atualiza item `http://baseURL/api/v1/item`
- Sem parâmetros
- Corpo:
```CS
{
  "name":<string>
  "value":<float>
}
```

&nbsp;
### `DELETE`  `👮` Deleta item `http://baseURL/api/v1/item`
- Sem parâmetros
- Sem corpo
&nbsp;
# Inicializando a API

Para executar a api, algum simples passo devem ser seguidos. 

## Instalando pacotes
Após baixar uma copia deste repositório, com o terminal em tua pasta raiz, deve-se instalar todos os seus pacotes com o seu gerenciador preferido.

`$ yarn install` ou `$ npm i`

## Parâmetros de ambiente (dotenv)
Os parâmetros de ambiente devem ser criados, em um arquivo `.env`, seque no repositório um arquivo de exemplo como base. A base de dados utilizada foi o **POSTGRES**.

## Base de dados
A base de dados usada é o postgres, como sendo uma base relacional, precisamos fazer a construção de suas tabelas e popula-las, com os seguintes comandos:

`$ yarn sequelize db:migrate` ou `$ npm sequelize db:migrate`

`$ yarn sequelize db:seed:all` ou `$ npm sequelize db:seed:all`

## Executando
Por fim, ao rodar a aplicação com `yarn dev` ou `npm run dev`, ela estara pronta na porta `3333`.
