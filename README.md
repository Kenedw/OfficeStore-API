# Sumario 

[TOC]


# OfficeStore - API

Api responsavel por servir o OfficeStore-WEB, criado com NodeJs e ExpressJs, utilizando o ORM sequelize com postgres alem autenticação OAuth2.

# Autenticação

A apricação utiliza autenticação do tipo Bearer Token, que deve ser incluida no header das requisições.

`Authorization: Bearer <token>`

# Rotas (endpoints)

Descrição das rotas disponiveis na api, no modelo:

`<_metodo_> <_autenticada?_> Titulo - URL - params - body`

Em toda requisição autenticada 👮, deve conter o token de autenticação capturado na rota de autenticação.

##### `GET` Status do servidor `http://baseURL/api/v1/`
- Sem parametros
- Sem corpo

##### `POST` Autenticação `http://baseURL/api/v1/auth/sign_in`
 - Sem Parametro
 - Corpo:
```JSON
 {
 	"email": <_string_><_opcional se existir cnpj_>,
 	"cnpj": <_string_><_opcional se existir email_>,
	"password": <_string_><_obrigatorio_>,
 }
 ```

##### `GET` Buscar usuario pelo ID `http://baseURL/api/v1/user/:id`
- Sem parametros
- Sem corpo

##### `POST` Cria novo usuario `http://baseURL/api/v1/user`
- Sem parametros
- Corpo:
```JSON
{
	"name":<_string_><_obrigatorio_>,
	"email":<_string_><_obrigatorio_>,
	"cnpj":<_string_><_obrigatorio_>,
	"password":<_string_><_obrigatorio_>,
}
```

##### `PUT` `👮` Atualiza usuario `http://baseURL/api/v1/user`
- Sem parametros
- Corpo:
```JSON
{
	"name":<_string_>,
	"email":<_string_>,
	"cnpj":<_string_>,
	"password":<_string_>,
	"confirmPassword":<_string_><_obrigatorio se possuir password_>,
	"oldPassword":<_string_><_obrigatorio se possuir password_>,
}
```

##### `DELETE`  `👮` Deleta usuario `http://baseURL/api/v1/user`
- Sem parametros
- Sem corpo

----