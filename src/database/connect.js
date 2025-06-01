const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@projeto.ojcir9k.mongodb.net/database?retryWrites=true&w=majority&appName=Projeto`);
        console.log('Conexão com o banco de dados realizada com sucesso!');
    } catch (error) {
        console.log('Erro ao conectar com o banco de dados:', error);
    }
};

module.exports = connectToDatabase;
