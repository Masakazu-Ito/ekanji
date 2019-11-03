import React from 'react';

class Charge extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	
	render(){
		return(
			<div>
				<p>一人当たり:{this.props.individual_fee}¥</p>
				<p>差額:245円</p>
				<p>人数:6人</p>
				{/* 中間発表用 */}
			</div>
		);
	}
}

export default Charge;