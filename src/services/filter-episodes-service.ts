import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";




export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {

    let responseFormat : FilterPodcastModel = {
        statusCode : 0,
        body : [],

    };


    const queryString = podcastName?.split("?p=")[1] ?? "";
    

    const data = await repositoryPodcast(queryString);


    responseFormat = {
      statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
      body: data,
    };
  
    return responseFormat;
};