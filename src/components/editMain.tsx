import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface EditableElement {
  id: number;
  title: string;
  value: string;
}

interface EditableComponentProps {
  elementData: EditableElement;
}

const EditableComponent: React.FC<EditableComponentProps> = ({ elementData }) => {
  const [tempTitle, setTempTitle] = useState(elementData.title);
  const [tempValue, setTempValue] = useState(elementData.value);
  const [show, setShow] = useState(false);
  const [showWarning, setShowWarning] = useState(false); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async () => {
    const updatedElement = { ...elementData, title: tempTitle, value: tempValue };

    try {
      const response = await fetch(`http://localhost:3001/elementos/${elementData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedElement),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar no servidor");
      }

     
      setShow(false);

   
      setShowWarning(true);

     
      const delay = 60 * 1000; 

   
      setTimeout(() => {
        window.location.reload();
      }, delay);

    } catch (error) {
      console.error("Erro ao salvar", error);
    }
  };

  return (
    <div>
      <div className="col me-2">
        <div className="text-uppercase text-primary fw-bold text-xs mb-1">
          <span>{elementData.title}</span>
        </div>
        <div className="text-dark fw-bold h5 mb-0">
          <span>{elementData.value}</span>
        </div>
      </div>

     
      <div className="col-auto" onClick={handleShow}>
        <i className="fas fa-calendar fa-2x text-gray-300"></i>
      </div>

   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal de Configurações</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Editar Elemento</h2>
          <Form className="mt-4">
            <Form.Group controlId="formTitle">
              <Form.Label>Título:</Form.Label>
              <Form.Control
                type="text"
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formValue" className="mt-3">
              <Form.Label>Valor:</Form.Label>
              <Form.Control
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
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


      {showWarning && (
        <div className="alert alert-warning mt-3">
          A página será atualizada em 1 minuto.
        </div>
      )}
    </div>
  );
};

export default EditableComponent;
