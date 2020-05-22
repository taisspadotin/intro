import React,{Component} from 'react'

export default class Input extends Component{
	render(){
		return(
				<div class="form__group field">
					<input type="input" class="form__field" placeholder={this.props.label} name={this.props.name} id={this.props.id} required={this.props.required === 'true' ? 'true' : 'false'} />
					<label for="name" class="form__label">{this.props.label}</label>
				</div>
			)
	}
}