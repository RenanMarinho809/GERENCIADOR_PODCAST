import { IncomingMessage, ServerResponse} from 'http'

import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { contentType } from '../utils/content-type';
import { FilterPodcastModel } from '../models/filter-podcast-model';
import { PodcastModel } from '../models/podcast-model';




export const getListEpisodes = async(req: IncomingMessage, res: ServerResponse) => {
 
      const content : PodcastModel[] = await serviceListEpisodes(); 
        
       res.writeHead(StatusCode.OK, {'content-type' : contentType.JSON});
         res.end(JSON.stringify(content));  
};

export const getFilterEpisodes = async ( req: IncomingMessage, 
  res: ServerResponse ) => {

      const content : FilterPodcastModel = await  serviceFilterEpisodes(req.url);

      res.writeHead(content.statusCode, {'content-type' : contentType.JSON});
      res.end(JSON.stringify(content.body));
  }