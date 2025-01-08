import * as http from 'http';

import { getFilterEpisodes, getListEpisodes } from './controllers/podscasts-controller';

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {
     
    // Listar Podcast
    if (req.method === 'GET' && req.url === '/api/list') {
      await  getListEpisodes(req, res);
    }

    if (req.method === 'GET' && req.url === '/api/episode'){
        await getFilterEpisodes(req, res);
    }

});

const port = process.env.PORT 

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});