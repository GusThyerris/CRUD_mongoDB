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

// Eclusão do livro mais velho da coleção "biblioteca"
db.biblioteca.deleteOne({anoEdic: {$lt : 1950}})

// Exclusão de todos os livros da coleção "biblioteca"
db.biblioteca.deleteMany({autor: 'Anne Frank'})