import { useAxios } from "@/hooks";
import { useNewsApi } from "@/services";
import { useState } from "react";

export const useNews = () => {
  const { getAll, getSources } = useNewsApi();

  const [sources, setSources] = useState();
  const [news, setNews] = useState();

  const getNewsData = async (query: any) => {
    try {
      setNews([] as any)
      const data = await getAll(query);
      setNews((prevNews) => {
        if (prevNews) {
          return [...prevNews, ...data as any];
        }
        return data as any;
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const getAllSources = async (params: any) => {
    try {
      const data = await getSources();
      setSources((prevSources) => {
        if (prevSources) {
          return [...prevSources, ...data.sources];
        }
        return data.sources;
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return {
    news,
    sources,
    getNewsData,
    getAllSources,
  };
};
