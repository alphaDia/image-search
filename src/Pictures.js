import InfiniteScroll from "./InfiniteScroll";
import { useState, useEffect } from "react";
import SearchPhotos from "./SearchPhotos";
import api from "./api";

const Pictures = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [pics, setPics] = useState([]);
  const [query, setQuery] = useState("");

  const queryPhotos = async (q) => {
    setQuery(q);
    setIsFetching(true);
    const result = await api.queryPhotos(q);
    setPics(result);
    setIsFetching(false);
  };

  useEffect(() => {
    // here we simulate adding new posts to List
    async function fetchPhotos() {
        const result = await api.queryPhotos(query, page);
        setPics((pics) => pics.concat(result));
    }
    if (query) {
        fetchPhotos()
    }
// eslint-disable-next-line
}, [page])

  const loadMore = async (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(page  => page + 1)
    }
  };

  return (
    <>
      <SearchPhotos
        queryPhotos={queryPhotos}
        isFetching={isFetching}
        pics={pics}
      />
      <InfiniteScroll isFetching={isFetching} pics={pics} loadMore={loadMore} />
    </>
  );
};

export default Pictures;
