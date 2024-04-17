<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=03bb85&height=180&section=header&animation=twinkling"/>

# Sobre o código

Este é um exemplo de utilização do MongoDB com JavaScript no shell do MongoDB. Ele demonstra a criação de uma coleção chamada "biblioteca" e operações básicas como inserção, consulta e exclusão de documentos.

## Código

```javascript
// Criação e inserção de dados na tabela "biblioteca"
db.biblioteca.insertMany([
    {nome: "A Segunda Guerra Mundial: Uma História", autor: 'Antony Beevor', anoEdic: 2012, emprestado: true},
    {nome: "O Diário de Anne Frank", autor: 'Anne Frank', anoEdic: 1947, emprestado: false},
    {nome: "A Queda de Berlim", autor: 'Antony Beevor', anoEdic: 2002 , emprestado: false},
    {nome: "Band of Brothers: E Company, 506th Regiment, 101st Airborne from Normandy to Hitler's Eagle's Nest", autor: 'Stephen E. Ambrose', anoEdic: 1992, emprestado: true},
    {nome: "O Resgate de Roma", autor: 'Robert Fisk', anoEdic: 2006, emprestado: true},
    {nome: "O Livro dos Mortos", autor: 'Edwige Danticat', anoEdic: 2004, emprestado: false},
    {nome: "O Dia D: A Batalha pela Normandia", autor: 'Antony Beevor', anoEdic: 2009, emprestado: false},
    {nome: "O Mito do Blitz", autor: 'Angus Calder', anoEdic: 1992, emprestado: true},
    {nome: "Anne Frank: A Autobiografia Gráfica", autor: 'Anne Frank', anoEdic: 2010, emprestado: false},
    {nome: "O Diário de Anne Frank: Edição Definitiva", autor: 'Anne Frank', anoEdic: 1995, emprestado: true}
])

// Consulta de todos os livros da coleção "biblioteca"
db.biblioteca.find()

// Consulta de todos os livros da autora "Anne Frank" 
db.biblioteca.find({autor: 'Anne Frank'})

// Consulta do livro mais velho(conforme o quê foi aprendido em aula)
db.biblioteca.find({anoEdic: {$lt: 1950}})

// Exclusão do livro mais velho da coleção "biblioteca"
db.biblioteca.deleteOne({anoEdic: {$lt : 1950}})

// Exclusão de todos os livros da coleção "biblioteca"
db.biblioteca.deleteMany({autor: 'Anne Frank'})

````

# Como executar

Para executar esse código, você precisa ter o MongoDB instalado na sua máquina. Em seguida, basta abrir o shell do MongoDB e colar o código no console.

Lembre-se de substituir os valores conforme necessário para atender aos requisitos do seu projeto.


## Resumo do projeto

Este é um exemplo básico e introdutório. Ele possui um arquivo README.md que fornece uma visão geral do código, incluindo uma descrição do que ele faz, o código em si e instruções sobre como executá-lo. Ele também inclui um [link](https://www.mongodb.com/docs/) para a documentação do MongoDB para referência adicional.

