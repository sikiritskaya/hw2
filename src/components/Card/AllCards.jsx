import styled from "styled-components";
import { items } from "../mockdata/items";
import Card from "./Card";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  text-align: center;
`;

const AllCards = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
      <Container>
        {items.map((item) => (
          <Card
            key={item.id}
            brand={item.brand}
            model={item.model}
            quantity={item.inStock}
            img={item.img}
            price={item.price}
          />
        ))}
      </Container>
    </>
  );
};

export default AllCards;
