# Api Rest com testes Jest
## Sobre o Projeto
 
Esta é um API Rest com testes Jest, utilizando sequilize como ORM para conexão e uso do banco de dados MySql. E usando express para o servidor.

Abaixo segue as rotas existentes

```Bash

[GET] 	 /categorias 
[GET] 	 /categorias/:id 	
[POST] 	 /categorias 
[PATCH]  /categorias/:id 	
[DELETE] /categorias/:id	

[GET] 	 /produtos 		
[GET] 	 /produtos/:id 		
[POST] 	 /produtos 	
[PATCH]  /produtos/:id 	
[DELETE] /produtos/:id

[GET] 	 /produtos/:id/estoque  Nesse caso deve usar o id produto para a busca
[PATCH]  /produtos/:id/estoque
[DELETE] /produtos/:id/estoque

```


<p align="center">
<a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-nascimento-andrade-34574398/">
    <img alt="Made by J. Lucas" src="https://img.shields.io/badge/made%20by-Jo%C3%A3o%20Lucas-blue">
</a>

<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue">
</p>

## Tecnologias:

<a href="https://nodejs.org/en/about/">
  <img alt="NodeJs" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
</a>

<a href="https://expressjs.com/pt-br/">
  <img alt="ExpressJs" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
</a>

<a href="https://jestjs.io/pt-BR/">
  <img alt="Jest" src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white">
</a>

<a href="https://sequelize.org/">
  <img alt="Sequelize" src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue">
</a>

<a href="https://www.mysql.com/">
  <img alt="MySQL" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
</a>

### Como Rodar a aplicação

```bash
#Faça um clone da aplicação
$ git clone https://github.com/Jlucas93/apiJest.git

# Instale as dependências
$ npm install 

#Crie um arquivo .env na pasta raiz, de acordo com o arquivo .env.example encontrado na pasta raiz, insira as informações do seu banco de dados.

#Rode o comando para inicar as configurações do sequelize
$npx sequelize init:config

#Criando as tabelas do banco com as migrations
$npx sequelize db:migrate

#Populando o banco com alguns dados de exemplo
$npx sequelize db:seed:all

# Para rodar em modo de desenvolvimento com o nodemon execute 
$ npm run dev


# A aplicação irá iniciar na porta:3000 caso nenhuma informação seja passada na variável de ambiente - acesse http://localhost:3000
```
### Como rodar os testes
```bash

#Execute o comando
$ npx coss-env DB_NAME=test sequelize db:create

#Após criado o bando de dados para testes execute o comando para rodar todos os testes
$ npm run test

#Ele irá popular o banco, rodar os testes e depois apagar os dados do banco

#Caso deseje rodar um teste especifico basta passar o nome dele, como por exemplo categoria
$ npm test categoriaController
```
## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a <a href="https://opensource.org/licenses/MIT">licença MIT</a> para saber mais.
