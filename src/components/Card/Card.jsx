import styled from "styled-components";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Modal from "./Modal";

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

const DeleteIcon = styled(DeleteForeverIcon)`
  cursor: pointer;
`;

const FavoreIcon = styled(FavoriteIcon)`
  cursor: pointer;
`;

const FavoreIconRed = styled(FavoriteIcon)`
  cursor: pointer;
  color: red;
`;

const Card = (props) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const [isvisible, setIsvisible] = useState(true);

  const [important, setImportant] = useState(false);

  const handleChange = () => {
    setImportant((previousState) => !previousState);
  };

  const deleteItem = () => {
    setIsvisible(false);
    setIsModalActive(false);
  };

  return (
    <>
      {isvisible && (
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
              in stock <Title>{props.inStock}</Title>
            </div>
            <div>
              <DeleteIcon onClick={() => setIsModalActive(true)} />
              {important ? (
                <FavoreIconRed onClick={handleChange} />
              ) : (
                <FavoreIcon onClick={handleChange} />
              )}
            </div>
          </div>
        </Container>
      )}

      {isModalActive && (
        <Modal setIsModalActive={setIsModalActive} deleteItem={deleteItem} />
      )}
    </>
  );
};

export default Card;
