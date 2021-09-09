import express, { Request, Response } from 'express';
import mustache from 'mustache-express';
import path from 'path';
import MainRoutes from './routes/index';

const server = express();

// Configurando o Mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Pasta pública e arquivos estáticos
server.use(express.static( path.join(__dirname, '../public')));

// Habilitar dados do formulário dentro da rota POST | extended: true, manda mais detalhes das informações do corpo da requisição.
server.use(express.urlencoded({extended: true}));

server.use(MainRoutes);

// Página não encontrada
server.use((req: Request, res: Response) => {
    res.send('Página não encontrada!');
});

server.listen(3000);