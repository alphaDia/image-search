import  { createApi } from "unsplash-js";

const queryPhotos = async (query, page = 1) => {
  const unsplash = createApi({ accessKey: process.env.REACT_APP_ACCESS_KEY });
  const result = await unsplash.search.getPhotos({
    query: query,
    page: page,
    perPage: 20,
  });

  if (result.type === "success") {
    return result.response.results;
  }
};

const api = {queryPhotos};


export default api