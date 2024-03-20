import { useNewsApi } from "@/services";
import { sources } from "@/stores/news-resources/news-resources";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';

export const useNavigationDrawer = () => {
  const { getAll, getSources } = useNewsApi();

//   const [sources, setSources] = useState();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const setSources = useSetRecoilState(sources)
  const val = useRecoilValue(sources)


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const getAllSources = async () => {
    try {
      const data = await getSources();
      setSources(data.sources)      
    } catch (error) {
      console.error("Error", error);
    }
  };


  return {
    mobileOpen,
    isClosing,
    handleDrawerClose,
    handleDrawerTransitionEnd,
    handleDrawerToggle,
    getAllSources
  };
};
