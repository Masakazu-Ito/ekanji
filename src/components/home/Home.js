import React from 'react';
import InputArea from './InputArea';
import Calculator from './ Calculator';

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {price: '',participant_num: ''};
		this.handleClick = this.handleClick.bind(this);
	}

	givenPriceFunk(e){
		this.setState({ total_fee: e.target.value },()=>{
			console.log(this.state.total_fee);
		});
	}
	givenPeopleFunk(e){
		this.setState({ participant_num: e.target.value },()=>{
			console.log(this.state.participant_num);
		});
	}

	handleClick = (e) => {
    e.preventDefault();
    const method = "GET";

    return fetch('http://3.114.10.127/calc', {
      method,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          total:''
        });
        console.log(responseJson);
      })
      .catch((error) =>{
        console.error(error);
      });

  }

	render(){
		return(
			<div>
				<InputArea  unit="¥" funk={(e) => { this.givenPriceFunk(e); }} value={this.state.value}/>
				<InputArea unit="人数" funk={(e) => { this.givenPeopleFunk(e); }} value={this.state.value}/>
				<Calculator total_fee={this.state.total_fee} participant_num={this.state.participant_num} onClick={this.handleClick}/>
			</div>
		);
	}
}

export default Home;
