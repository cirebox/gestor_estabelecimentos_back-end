# README #
API para gestão de estabelecimentos
### 1º clone o repositório ###
abra o terminal e digite o seguinte comando `git clone https://cirebox@bitbucket.org/cirebox/gestorapi.git`
### 2º instale as dependencias ###
após clonar abra o diretorio rodando o sequinte comando `cd gestorapi` e rode o comando `npm i`
### 3º crie o database no postgres ###
para criar a base de dados rode o comando `npx sequelize db:create`
### 4º rode a rotina de test para certificar que esta tudo ok ###
para roda a rotina de teste, rode o comando `npm test`
### 5º Rodando a API em modo de desenvolvimento ###
rode o comando `npm run dev` para iniciar o servidor e use um navegador para acessar a url `http://localhost:3100/`

### Limpando a base de dados ###
rode o comando `npm run clean`

### Para recriar as tabelas na base de dados ###
rode o comando `npm run migrate`
