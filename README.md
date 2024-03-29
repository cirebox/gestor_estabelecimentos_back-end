# README #

[<img height=40 witdh=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />](https://open.vscode.dev/cirebox/gestor_estabelecimentos_back-end)

API para gestão de estabelecimentos utilizando, nodejs com banco de dados postgres.

Abra o terminal, copie os comando a baixo, cole no terminal e de enter.
```bash
## clonar este repositório para um diretório local
git clone https://cirebox@bitbucket.org/cirebox/back-end.git

## abrindo o repositório clonado
cd back-end

## instalando as dependências
npm i

## criando o banco de dados
npx sequelize db:create

## criando as tabelas no banco de dados
npx sequelize db:migrate

## criando dados para demonstração 
npx sequelize-cli db:seed:all

## rodando a rotina de test para certificar que esta tudo ok
npm test

## rodando a API em modo de desenvolvimento 
npm run dev

```

o comando `npm run dev` irá rodar a api na porta 3100
Você pode verificar isso abrindo seu navegador e navegando para: [http://localhost:3100/](http://localhost:3100/)

### Usuário padrão para autenticação ###

email =`admin@example.com` e password =`123`

### Caso tenha problemas ao criar a base de dados ###

confira os dados no arquivo `.env` referente a conexão

### Para limpar a base de dados ###

rode o comando `npx sequelize db:migrate:undo:all`

### Para recriar as tabelas na base de dados ###

rode o comando `npx sequelize db:migrate`

### Para gerar a documentação ###

rode o comando `npm run doc`
