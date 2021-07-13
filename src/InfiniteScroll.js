import { useRef, useEffect } from "react";
import Loader from "./Loader";

const options = {
  root: null,
  rootMargin: "20px",
  threshold: 1.0,
};


const InfiniteScroll = (props) => {
  const loader = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(props.loadMore, options);

    if (loader && loader.current) {
      observer.observe(loader.current);
    }
  }, [loader, props.loadMore]);

  return (
    <>
      {!props.isFetching && props.pics.length ? (
        <Loader toBottom={true} ref={loader} />
      ) : (
        ""
      )}
    </>
  );
};

export default InfiniteScroll;
