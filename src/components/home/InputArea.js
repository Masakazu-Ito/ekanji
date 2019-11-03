import React from 'react';

class InputArea extends React.Component{
  constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.state = {}
	}
		
  handleChange(e) {
		return this.props.funk(e);
	}
		
	render(){
		return(
			<form>
				<label>
					{this.props.unit}:
					<input type="number" value={this.props.value} onChange={this.handleChange} />
				</label>   
			</form>
		);
	}
}

export default InputArea;
