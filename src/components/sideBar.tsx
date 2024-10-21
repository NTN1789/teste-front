import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, Nav, NavDropdown } from 'react-bootstrap';
import { ConnectableElement, DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainContent from './MainContent';

interface EditableElement {
  id: number;
  title: string;
  value: string;
}

const DraggableElement: React.FC<{ element: EditableElement; index: number; moveElement: (fromIndex: number, toIndex: number) => void }> = ({ element, index, moveElement }) => {
  const [, ref] = useDrag({
    type: 'ELEMENT',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'ELEMENT',
    hover(item: { index: number }) {
      if (item.index !== index) {
        moveElement(item.index, index);
        item.index = index; // Update the index for the dragged item
      }
    },
  });

  return (
    <NavDropdown.Item ref={(node: ConnectableElement) => ref(drop(node))}>
      {element.title}
    </NavDropdown.Item>
  );
};

const Sidebar: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [elements, setElements] = useState<EditableElement[]>([]);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await fetch("http://localhost:3001/elementos");
        const data = await response.json();
        setElements(data);
      } catch (error) {
        console.error("Erro ao buscar elementos do servidor", error);
      }
    };

    fetchElements();
  }, []);

  const moveElement = (fromIndex: number, toIndex: number) => {
    const updatedElements = [...elements];
    const [movedElement] = updatedElements.splice(fromIndex, 1);
    updatedElements.splice(toIndex, 0, movedElement);
    setElements(updatedElements);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="d-flex">
        <nav
          className="navbar navbar-dark bg-primary flex-column align-items-start p-3"
          style={{ width: '250px', height: '100vh', position: 'fixed', top: 0, left: 0 }}
        >
          <div className="container-fluid d-flex flex-column p-0">
            <a className="navbar-brand d-flex justify-content-center align-items-center mb-4" href="#">
              <i className="fas fa-layer-group fa-2x"></i>
              <span className="ml-2">CAMADAS</span>
            </a>

            <Nav className="flex-column text-light w-100" id="accordionSidebar">
              <Nav.Item className="mb-3">
                <NavDropdown
                  title={
                    <a aria-expanded="true" data-bs-toggle="dropdown" className="dropdown-toggle link-light">
                      <i className="fas fa-grip-horizontal text-light"></i> Elemento Ordenável 1
                    </a>
                  }
                  id="dropdown1"
                  className="text-light"
                >
                  {elements.map((element, index) => (
                    <DraggableElement key={element.id} element={element} index={index} moveElement={moveElement} />
                  ))}
                </NavDropdown>
              </Nav.Item>
<Nav.Item className="mb-3" >
            <NavDropdown
              title={
                <a  aria-expanded="true"   data-bs-toggle="dropdown" className="dropdown-toggle link-light"  >
                  <i className="fas fa-grip-horizontal"></i> Elemento Ordenável 2
                </a>
              }
              id="dropdown2"
              className="text-light"
            >
              <NavDropdown.Item href="#">Lista de Tarefas</NavDropdown.Item>
              <NavDropdown.Item href="#">Grade de Cores</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>

           
             <Nav.Item className="mb-4" >
            <NavDropdown
              title={
                <a  aria-expanded="true"   data-bs-toggle="dropdown" className="dropdown-toggle link-light"  >
                  <i className="fas fa-grip-horizontal"> </i> Elemento Ordenável 3
                </a>
              }
              id="dropdown2"
              className="text-light"
            >
                 <a className="dropdown-item" href="#">Produto</a>
                                <a className="dropdown-item" href="#">Produto</a>
                                <a className="dropdown-item" href="#">Produto</a>
                                <a className="dropdown-item" href="#">Produto</a>
            </NavDropdown>
          </Nav.Item>



   <Nav.Item className="mb-4" >
            <NavDropdown
              title={
                <a  aria-expanded="true"   data-bs-toggle="dropdown" className="dropdown-toggle link-light"  >
                  <i className="fas fa-grip-horizontal"> </i> Elemento Ordenável 4
                </a>
              }
              id="dropdown2"
              className="text-light"
            >
              <a className="dropdown-item" href="#">Imagem 1</a>
              <a className="dropdown-item" href="#">Imagem 2</a>
            </NavDropdown>
          </Nav.Item>

                <Nav.Item className="mb-3" >
            <NavDropdown
              title={
                <a  aria-expanded="true"   data-bs-toggle="dropdown" className="dropdown-toggle link-light"  >
                  <i className="fas fa-grip-horizontal"> </i> Elemento Ordenável 5
                </a>
              }
              id="dropdown2"
              className="text-light"
            >
                 <a className="dropdown-item" href="#">Título</a>
                                <a className="dropdown-item" href="#">Subtítulo</a>
                                <a className="dropdown-item" href="#">Botao 1</a>
                                <a className="dropdown-item" href="#">Botao 2</a>
                                <a className="dropdown-item" href="#">Imagem</a>
            </NavDropdown>
          </Nav.Item>
              
              <div className="nav-item" style={{ padding: "15px" }}>
                <Button type="button" className="btn btn-success text-light fw-bold" onClick={handleShow}>
                  Modelo de Modal de Componente
                </Button>
              </div>
              <div className="nav-item" style={{ padding: "15px" }}>
                <Button type="button" className="btn btn-dark col-12 text-light fw-bold">
                  Salvar Layout
                </Button>
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal de Configurações</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <small>
                    Os campos devem ser referentes ao conteúdo dos Elementos editáveis do bloco escolhido.
                  </small>
                  <Form className="mt-4">
                    <Form.Group className="mb-3" controlId="formSubtitulo">
                      <Form.Label>Subtítulo</Form.Label>
                      <Form.Control type="text" placeholder="Digite o subtítulo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTitulo">
                      <Form.Label>Título</Form.Label>
                      <Form.Control type="text" placeholder="Digite o título" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formIconClass">
                      <Form.Label>Classe do Ícone</Form.Label>
                      <Form.Control type="text" placeholder="Digite a classe do ícone" />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Salvar Alterações
                  </Button>
                </Modal.Footer>
              </Modal>
            </Nav>
          </div>
        </nav>

        <div style={{ marginLeft: '250px', padding: '30px', width: '100%' }}>
          <MainContent />
          <footer className="bg-white sticky-footer">
            <div className="container my-auto">
              <div className="text-center my-auto copyright"><span>Copyright © Meu editor</span></div>
            </div>
          </footer>
        </div>
      </div>
    </DndProvider>
  );
};

export default Sidebar;
