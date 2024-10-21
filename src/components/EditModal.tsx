import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface EditModalProps {
  show: boolean;
  handleClose: () => void;
  element: any;
  saveChanges: (updatedElement: any) => void;
}

const EditModal: React.FC<EditModalProps> = ({ show, handleClose, element, saveChanges }) => {
  const [updatedElement, setUpdatedElement] = useState(element);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedElement({ ...updatedElement, [name]: value });
  };

  const handleSave = () => {
    saveChanges(updatedElement);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Elemento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={updatedElement.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formSubtitle" className="mt-3">
            <Form.Label>Subtítulo</Form.Label>
            <Form.Control
              type="text"
              name="subtitle"
              value={updatedElement.subtitle}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAmount" className="mt-3">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="text"
              name="amount"
              value={updatedElement.amount}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Salvar Alterações
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
