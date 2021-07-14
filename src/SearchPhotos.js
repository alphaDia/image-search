import { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Container from "./Container";
import Image from "./Image";
import Profile from "./Profile";
import Loader from "./Loader";
import api from './api'


const CardList = styled(Container)`
  margin: 80px auto;
  column-count: 1;

  @media screen and (min-width: 768px) and (min-width: 1024px) {
    column-count: 2;
  }

  @media screen and (min-width: 1280px) {
    column-count: 3;
  }
`;

const Card = styled(Container)`
  display: flex;
  position: relative;
  margin-bottom: 1rem;
`;

const SearchPhotos = (props) => {

  const [isFetching, setIsFetching] = useState(false);
  const [pics, setPics] = useState([]);

  const queryPhotos = async (query) => {
    setIsFetching(true);
    try {
      const result = await api.queryPhotos(query);
      setPics(result)
    } catch (error) {
      alert(error)
    }

    setIsFetching(false);
  };

  const isEmpty = pics.length || "";

  return (
    <>
      <Form onsubmit={queryPhotos} />

      {isFetching ? (
        <Loader />
      ) : (
        isEmpty && (
          <CardList className="card-list">
            {pics.map((pic, id) => (
              <Card className="card" key={id}>
                <Image
                  className="card-image"
                  src={pic.urls.regular}
                  id={pic.id}
                  alt={pic.alt_description}
                />
                <Profile
                  className="profile"
                  image_src={pic.user.profile_image.medium}
                  name={pic.user.name}
                />
              </Card>
            ))}
          </CardList>
        )
      )}
    </>
  );
};

export default SearchPhotos;
