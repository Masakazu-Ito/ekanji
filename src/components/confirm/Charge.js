import React from 'react';

class Charge extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	
	render(){
		return(
			<div>
				<p>一人当たり{this.props.individual_fee}¥</p>
			</div>
		);
	}
}

export default Charge;