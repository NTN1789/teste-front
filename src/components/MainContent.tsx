import React, { useEffect, useState } from 'react';

import { Button, Container, Form, FormControl } from 'react-bootstrap';
import Placeholder from "../assets/placeholder.png"
import EditableComponent from './editMain';

interface EditableElement {
  id: number;
  title: string;
  value: string;
}
const MainContent: React.FC = () => {

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
  
  return (
    <>
    <Container fluid className="bg-light p-4">
    <Form className="d-flex mb-4">
        <FormControl type="text" placeholder="Buscar Componente" className="me-2 w-50" />
        <Button variant="outline-primary">
          <i className="fas fa-search"></i>
        </Button>
      </Form>

      <h4>Elementos</h4>
  
        <div className="row">
                        <div className="col-xxl-12">
                            <h1>Elemento Ordenável 1</h1>
                        </div>
                     {elements.map((element) => ( 
                       <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card shadow border-left-primary py-2">
                                <div className="card-body">
                                 <EditableComponent elementData={element} />
                                </div>
                            </div>
                        </div>
                      ))
                        }
                    </div>

     
      <div className="row">
        <div className="col-xxl-12">
          <h1>Elemento Ordenável 2</h1>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4"></div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="text-primary fw-bold m-0">Lista de Tarefas</h6>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row g-0 align-items-center">
                  <div className="col me-2">
                    <h6 className="mb-0"><strong>tarefa 1</strong></h6>
                    <span className="text-xs">estudar </span>
                  </div>
                  <div className="col-auto">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="formCheck-1" />
                      <label className="form-check-label" htmlFor="formCheck-1"></label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row g-0 align-items-center">
                  <div className="col me-2">
                    <h6 className="mb-0"><strong>tarefa 2</strong></h6>
                    <span className="text-xs">mover os produtos</span>
                  </div>
                  <div className="col-auto">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="formCheck-1" />
                      <label className="form-check-label" htmlFor="formCheck-1"></label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row g-0 align-items-center">
                  <div className="col me-2">
                    <h6 className="mb-0"><strong>tarefa 3</strong></h6>
                    <span className="text-xs">trocar as imagens do projeto</span>
                  </div>
                  <div className="col-auto">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="formCheck-1" />
                      <label className="form-check-label" htmlFor="formCheck-1"></label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row g-0 align-items-center">
                  <div className="col me-2">
                    <h6 className="mb-0"><strong>tarefa 4 </strong></h6>
                    <span className="text-xs">trocar a cor dos button</span>
                  </div>
                  <div className="col-auto">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="formCheck-1" />
                      <label className="form-check-label" htmlFor="formCheck-1"></label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row g-0 align-items-center">
                  <div className="col me-2">
                    <h6 className="mb-0"><strong>tarefa 5 </strong></h6>
                    <span className="text-xs"> exemplo :  arrumar o preço dos produtos </span>
                  </div>
                  <div className="col-auto">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="formCheck-1" />
                      <label className="form-check-label" htmlFor="formCheck-1"></label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

     
        <div className="col">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card text-white bg-primary shadow">
                <div className="card-body">
                  <p className="m-0">Primary</p>
                  <p className="text-white-50 small m-0">#4e73df</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card text-white bg-success shadow">
                <div className="card-body">
                  <p className="m-0">Success</p>
                  <p className="text-white-50 small m-0">#1cc88a</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card text-white bg-info shadow">
                <div className="card-body">
                  <p className="m-0">Info</p>
                  <p className="text-white-50 small m-0">#36b9cc</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card text-white bg-warning shadow">
                <div className="card-body">
                  <p className="m-0">Warning</p>
                  <p className="text-white-50 small m-0">#f6c23e</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card text-white bg-danger shadow">
                <div className="card-body">
                  <p className="m-0">Danger</p>
                  <p className="text-white-50 small m-0">#e74a3b</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card text-white bg-secondary shadow">
                <div className="card-body">
                  <p className="m-0">Secondary</p>
                  <p className="text-white-50 small m-0">#858796</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
                        <div className="col-xxl-12">
                            <h1>Elemento Ordenável 3</h1>
                        </div>
                    </div>
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                        <div className="col-xxl-3">
                            <div className="card"> <img className="card-img-top w-100 d-block fit-cover" style={{height: "200px"}}
                                    src={Placeholder}/>
                                <div className="card-body p-4">
                                    <p className="text-primary card-text mb-0">Produto</p>
                                    <h4 className="card-title">Nome do Produto</h4>
                                    <p className="card-text">Descrição do Produto</p><button className="btn btn-primary"
                                        type="button" style={{width: "100%"}}>Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3">
                            <div className="card"><img className="card-img-top w-100 d-block fit-cover" style={{height: "200px"}}
                                    src={Placeholder}/>
                                <div className="card-body p-4">
                                    <p className="text-primary card-text mb-0">Produto</p>
                                    <h4 className="card-title">Nome do Produto</h4>
                                    <p className="card-text">Descrição do Produto</p><button className="btn btn-primary"
                                        type="button" style={{width: "100%"}}>Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3">
                            <div className="card"><img className="card-img-top w-100 d-block fit-cover" style={{height: "200px"}}
                                    src={Placeholder}/>
                                <div className="card-body p-4">
                                    <p className="text-primary card-text mb-0">Produto</p>
                                    <h4 className="card-title">Nome do Produto</h4>
                                    <p className="card-text">Descrição do Produto</p><button className="btn btn-primary"
                                        type="button" style={{width: "100%"}}>Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3">
                            <div className="card" ><img className="card-img-top w-100 d-block fit-cover" style={{height: "200px"}}
                                    src={Placeholder}/>
                                <div className="card-body p-4">
                                    <p className="text-primary card-text mb-0">Produto</p>
                                    <h4 className="card-title">Nome do Produto</h4>
                                    <p className="card-text">Descrição do Produto</p><button className="btn btn-primary"
                                        type="button" style={{width: "100%"}}>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3" style={{marginTop: "0px"}}>
                        <div className="col-xxl-12">
                            <h1>Elemento Ordenável 4</h1>
                        </div>
                        <div className="col-xxl-6">
                            <div className="card"><img className="card-img-top w-100 d-block fit-cover" style={{height: "400px"}}
                                    src={Placeholder}/></div>
                        </div>
                        <div className="col-xxl-6">
                            <div className="card"><img className="card-img-top w-100 d-block fit-cover" style={{height: "400px"}}
                                    src={Placeholder}/></div>
                        </div>
                    </div>



                   
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3" style={{margin: "0px -12px 0px"}}>
                        <div className="col-xxl-12">
                            <h1>Elemento Ordenável 5</h1>
                        </div>
                        <div className="col-xxl-12">
                            <section>
                                <div className="container">
                                    <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
                                        <div className="row g-0">
                                            <div className="col-md-6">
                                                <div className="text-white p-4 p-md-5">
                                                    <h2 className="fw-bold text-white mb-3">Título&nbsp;</h2>
                                                    <p className="mb-4">Subtítulo</p>
                                                    <div className="my-3"><a className="btn btn-primary btn-lg me-2"
                                                            role="button" href="#">Botão 1</a><a
                                                            className="btn btn-light btn-lg" role="button" href="#">Botão
                                                            2</a></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 order-first order-md-last" style={{minHeight: "250px"}}>
                                                <img className="w-100 h-100 fit-cover" src={Placeholder}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

      
    </Container>

    </>
  );
};

export default MainContent;



