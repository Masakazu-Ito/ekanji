import React from 'react';
import {Link} from 'react-router-dom'


class GoRoulette extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return(
			<div>
					<p><Link to='./Roulette'>ルーレットへ</Link></p>
			</div>
		);
	}
}

export default GoRoulette;