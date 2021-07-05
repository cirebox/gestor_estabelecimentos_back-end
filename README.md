# README #
API para gestão de estabelecimentos

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

[API Rodando aqui](http://161.35.105.228:3333/)

### 1º Clone o repositório ###
abra o terminal e digite o seguinte comando `git clone https://cirebox@bitbucket.org/cirebox/back-end.git`
### 2º Instale as dependências ###
após clonar o repositório abra o diretorio usando o sequinte comando `cd back-end` e rode o comando `npm i`
### 3º Crie o database no postgres ###
para criar a base de dados rode o comando `npx sequelize db:create`

### 4º Crie as tabelas ###
rode o comando `npx sequelize db:migrate`

### 5º Criando dados para demonstração ###
rode o comando `npx sequelize-cli db:seed:all`
### 6º Rode a rotina de test para certificar que esta tudo ok ###
para roda a rotina de teste, rode o comando `npm test`
### 7º Rodando a API em modo de desenvolvimento ###
rode o comando `npm run dev` para iniciar o servidor e use um navegador para acessar a url `http://localhost:3100/`

### Usuário padrão para login ###
email =`admin@example.com` e senha =`123` 
### Caso tenha problemas ao criar a base de dados ###
confira os dados no arquivo `.env` referente a conexão

### Para limpar a base de dados ###
rode o comando `npx sequelize db:migrate:undo:all`

### Para recriar as tabelas na base de dados ###
rode o comando `npx sequelize db:migrate`
