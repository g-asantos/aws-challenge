
### Installation


Clone o projeto com:

```sh
git clone https://github.com/g-asantos/aws-challenge.git
```

Entra na pasta do projeto e instale as dependencias com:

```sh
yarn install
```

Altere os dados dentro do secrets.json para apontar para sua base de dados mongoDb.

Caso queira testar localmente, rode :

```sh
yarn offline
```

Para realizar o deploy na aws, execute:

```sh
serverless deploy
```


# Utilizando a API


### Pegando todos os funcionários

Realize uma requisição Htpp GET para https://gljs6de9l0.execute-api.us-east-1.amazonaws.com/dev/api/employees


## Pegando um funcionário pelo ID

Realize uma requisição Htpp GET para https://gljs6de9l0.execute-api.us-east-1.amazonaws.com/dev/api/employees/ID-DO-FUNCIONARIO


### Criando um funcionário

Realize uma requisição Htpp POST com conteúdo em JSON no seguinte formato:

{
	"name": "Testname",
	"age": 12,
	"role": "test"
}

para https://gljs6de9l0.execute-api.us-east-1.amazonaws.com/dev/api/employees


## Atualizando um funcionário

Realize uma requisição Htpp PUT para https://gljs6de9l0.execute-api.us-east-1.amazonaws.com/dev/api/employees/ID-DO-FUNCIONARIO com conteudo da requisição em JSON no formato:

{
	"name": "Testname",
	"age": 12,
	"role": "test"
}

### Deletando um funcionário

Realize uma requisição Htpp DELETE para https://gljs6de9l0.execute-api.us-east-1.amazonaws.com/dev/api/employees/ID-DO-FUNCIONARIO