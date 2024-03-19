import { useAxios, useHelper } from "@/hooks";
import { SourceModel } from "./typings/source.types";

export const useNewsApi = () => {

  const { serializeQuery } = useHelper()

    const API_KEY = import.meta.env.REACT_NEWS_API_KEY

    const { get } = useAxios()

    const getAll = async() => {
        const data  = await get(`/everything?q=Apple&apiKey=${API_KEY}`)
        console.log("Data", data);
        
    }

    const getSources = async(query:any) => {
      console.log(serializeQuery(query));
      

        return await get<Array<SourceModel>>(`/top-headlines/sources?apiKey=${API_KEY}`)
    }

    return {
      getAll,
      getSources
    }
}