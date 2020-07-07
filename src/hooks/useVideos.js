import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    if (term) {
      const response = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          type: "video",
          maxResults: 5,
          key: youtube.KEY,
        },
      });
      console.log(response);
      setVideos(response.data.items);
    }
  };

  return [videos, search];
};

export default useVideos;