import { useNewsApi } from "@/services";
import { useState } from "react";

export const useNews = () => {
  const { getAll } = useNewsApi();

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

  return {
    news,
    getNewsData,
  };
};
