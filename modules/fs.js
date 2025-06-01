const fs = require('fs');
const path = require('path');

// //Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (err) => {
//     if(err){
//         return console.log('Erros:' , err);
//     }
//     console.log('pasta criada');
// });

//Criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'),
    'Conteudo do arquivo', (err) => {
        if (err) {
            return console.log('Erro:', err);
        }
        console.log('Arquivo criado');

// Adiconar um arquivo
        fs.appendFile(path.join(__dirname, '/test', 'test.txt'),
            ' Conteudo do novo',
            (err) => {
                if (err) {
                    return console.log('Erro:', err);
                }
                console.log('Arquivo modificado com sucesso');
            }
        );
    }
);

// Ler um arquivo
fs.readFile(path.join(__dirname, '/test', 'test.txt'),  'utf8', (err, data) => {
    if(err){
        return console.log('Erro:' , err);
    }

    console.log(data);
})