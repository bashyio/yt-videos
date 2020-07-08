import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search();
  }, []);

  const search = async (term) => {
    if (!term) {
      term = defaultSearchTerm;
    }

    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: youtube.KEY,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
