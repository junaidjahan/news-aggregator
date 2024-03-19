import { useAxios, useHelper } from "@/hooks";
import { NewsResponseModel, SourceModel } from "./typings/source.types";
import { Category } from "@mui/icons-material";

export const useNewsApi = () => {
  const { serializeQuery } = useHelper();

  const apiKey = import.meta.env.REACT_NEWS_API_KEY;

  const { get } = useAxios();

  const getAll = async (query: any) => {
    try {
      const { category, sources, q, date } = query;
      let serializedQuery = "";
      let data = null;

      if (query.sources) {
        serializedQuery =
          serializeQuery({ sources, q, apiKey }) ?? "";
        const unfilteredData: NewsResponseModel = await get<NewsResponseModel>(
          `/top-headlines?${serializedQuery}`
        );
        data = unfilteredData?.articles.filter((article) =>
          date
            ? article?.publishedAt?.slice(0, 10) == date?.slice(0, 10)
            : article
        );

        return data;
      }

      serializedQuery =
        serializeQuery({ country: "us", category, q, apiKey }) ?? "";
      const unfilteredData: NewsResponseModel = await get<NewsResponseModel>(
        `/top-headlines?${serializedQuery}`
      );
      data = unfilteredData?.articles?.filter((article) => {
        if (sources && date) {
          return (
            sources?.includes(article?.source?.id) &&
            article?.publishedAt.slice(0, 10) == date?.slice(0, 10)
          );
        } else if (sources) {
          return sources?.includes(article?.source?.id);
        } else if (date) {
          return article?.publishedAt.slice(0, 10) == date?.slice(0, 10);
        } else {
          return article;
        }
      });

      return data;
    } catch (error) {
      throw error;
    }
  };

  const getSources = async () => {
    return await get<Array<SourceModel>>(
      `/top-headlines/sources?apiKey=${apiKey}`
    );
  };

  return {
    getAll,
    getSources,
  };
};
