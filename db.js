import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    'railway', 'root', 'fgoKCtWObeeMQpkLnzCenNRnCGWtitRS',{
        host: 'monorail.proxy.rlwy.net',
        dialect: 'mysql',
        port: 34338
    }
)

async function initialize () {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem-sucedida com o banco de dados.');
        await sequelize.sync({ alter: true }); // Isso sincroniza o modelo com o banco de dados, adicionando as tabelas necessárias se elas não existirem
      } catch (error) {
        console.error('Erro ao conectar-se ao banco de dados:', error);
      }
    
}

initialize()
export default sequelize