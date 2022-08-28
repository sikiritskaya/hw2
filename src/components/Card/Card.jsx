import styled from "styled-components";

const Container = styled.div`
  border: solid 1px grey;
  display: flex;
  width: 35%;
  margin-bottom: 2%;
  margin-left: 3%;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Card = (props) => {
  console.log(props);
  return (
    <Container>
      <Image src={props.img} alt="pic" />
      <div>
        <div>
          brand <Title>{props.brand}</Title>
        </div>
        <div>
          model <Title>{props.model}</Title>
        </div>
        <div>
          price <Title>{props.price}</Title>
        </div>
        <div>
          in stock <Title>{props.quantity}</Title>
        </div>
      </div>
    </Container>
  );
};

export default Card;
