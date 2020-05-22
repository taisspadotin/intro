import React,{Component} from 'react'
import Header from './header'
import { Link} from "react-scroll";
import {Row, Col} from 'react-bootstrap';

class Hero extends Component{
	
	render(){
		return(
				<div className="hero">
					<Header/>
					<br/>
					<div className="container" style={{marginTop: '70px'}}>
						<Row>
							<Col className="intro-image" align="center"> 
								<img src={require('../img/intro.png')}/>
							</Col>
							<Col className="intro-site"> 
								<h1>Wellcome.</h1>
								<h4>All the kind of users are wellcome here.</h4>
								<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<Link to="body-sec" href="#body-sec" spy={true} smooth={true} offset={-30} duration= {500}>
									<button type="button" className="btn-check">
										Check it out
									</button>
								</Link>
			
							</Col>
						</Row>
					</div>
				</div>	
			)
	}
}
export default Hero;