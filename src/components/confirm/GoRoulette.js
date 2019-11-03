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
				<ul>
					<li><Link to='./Roulette'>ルーレットへ</Link></li>
				</ul>
			</div>
		);
	}
}

export default GoRoulette;