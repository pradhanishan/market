import { FC } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../hooks/rtk-hooks";
import { closePopup } from "../../store/popup-slice";

const Popup: FC = () => {
  const popup = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();

  function closeModal() {
    dispatch(closePopup());
  }

  return (
    <Modal show={popup.show} onHide={closeModal} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>{popup.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{popup.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
