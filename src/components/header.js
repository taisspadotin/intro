import React, {Component} from 'react';
import { Link} from "react-scroll";


export default class Header extends Component{

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}
	componentWillUnmount() {
 		window.removeEventListener("scroll", this.handleScroll);
	}
	handleScroll = (e) => {
	   if (window.scrollY > 10) {
	      this.setState({fundo: '#fff', shadow: '2px 10px 7px -7px rgb(98, 97, 97)' })

	    } else {
	      this.setState({fundo: 'none', shadow: 'none' })
	    }	
	}
	constructor(props){
		super(props);
		this.state={
			fundo: 'none',
			shadow: 'none'
		}
	}


	render(){
		return(
			<header className="site-header" style={{background: this.state.fundo, boxShadow: this.state.shadow}}>
				<div className="site-header__home">
					{/*<img src='https://image.flaticon.com/icons/png/512/17/17479.png' style={{width: '30px', height: '30px', marginLeft: '25px'}}/>*/}
					{/*<a style={{marginLeft: '25px'}}>H O M E</a>*/}
					<img src={require('../img/l4.png')} style={{width: '50px', height: '50px'}}/>
				</div>	
				<div className="site-header__logout">
					<button type="button" className="btn-logout">
						Logout
					</button>	
				</div>	

				
			</header>
			)
	}
}