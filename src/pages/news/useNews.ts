import { useAxios } from "@/hooks";
import { useNewsApi } from "@/services";
import { useState } from "react";

export const useNews = () => {
  const { getAll, getSources } = useNewsApi();

  const [sources, setSources] = useState();

  const getNewsData = async () => {
    await getAll();
  };

  const getAllSources = async (params:any) => {
    try {
      const data = await getSources(params);
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
    sources,
    getNewsData,
    getAllSources,
  };
};
