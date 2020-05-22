import React,{Component} from 'react';
import {Row, Col, Table} from 'react-bootstrap';
import Input from './input'; 

class Body extends Component{
	render(){
		return(
			<section className="body-sec" >
				<div className="body">
					<div className="container">
					{/*<div class="body__title"><h2>Preencha os dados</h2></div>*/}
						<Row className="mt-4">
							<Col>
								<Input name="name" label="Name" required="true"/>
							</Col>
						</Row>
						<Row className="mt-4">
							<Col>
								<Input name="email" label="Email"/>
							</Col>
							<Col>
								<Input name="cpf" label="CPF"/>
							</Col>
						</Row>
						<br/><br/><br/>
						<Row>
							<Col  align="center">
								<button className="btn-pdr">Novo</button>
								<button className="btn-pdr">Salvar</button>
								<button className="btn-pdr">Alterar</button>
								<button className="btn-pdr">Excluir</button>
							</Col>
						</Row>
						<br/><br/><br/>
						<Table striped bordered hover className="table-pdr">
						  <thead>
						    <tr>
						      <th>#</th>
						      <th>First Name</th>
						      <th>Last Name</th>
						      <th>Username</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>1</td>
						      <td>Mark</td>
						      <td>Otto</td>
						      <td>@mdo</td>
						    </tr>
						    <tr>
						      <td>2</td>
						      <td>Jacob</td>
						      <td>Thornton</td>
						      <td>@fat</td>
						    </tr>
						    <tr>
						      <td>3</td>
						      <td colSpan="2">Larry the Bird</td>
						      <td>@twitter</td>
						    </tr>
						  </tbody>
						</Table>
					</div>
				</div>
			</section>
			)
	}
}

export default Body;