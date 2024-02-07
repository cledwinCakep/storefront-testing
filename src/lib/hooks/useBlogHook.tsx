import { useState, useEffect } from "react";
import { utilityApi } from "../api/GetApi";

const useBlogHook = () => {
  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await utilityApi.getBlog();
      setNews(res.data.data);
    };

    getNews();
  }, []);

  return { news };
};

export default useBlogHook;
