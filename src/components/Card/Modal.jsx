import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostForm = styled.div`
  width: 40%;
  border: solid 1px;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255);
  position: absolute;
  transition: 3s;
`;

const Cancel = styled(CloseIcon)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: rgba(79, 214, 219);
  width: 40%;
  height: 40px;
    &:hover{
        background-color:rgba(74, 142, 209);
    }
`;

const Modal = (props) => {
  return (
    <ModalContainer>
      <PostForm>
        <Cancel onClick={() => props.setIsModalActive(false)} />
        <h3>Are you shure?</h3>
        <Button onClick={props.deleteItem}>Yes, delete the item</Button>
        <Button onClick={() => props.setIsModalActive(false)}>
          No, returned to the main page
        </Button>
      </PostForm>
    </ModalContainer>
  );
};

export default Modal;
