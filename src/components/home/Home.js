import React from 'react';
import InputArea from './InputArea';
import Calculator from './ Calculator';

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {price: '',people: ''};
		this.handleClick = this.handleClick.bind(this);
	}

	givenPriceFunk(e){
		this.setState({ price: e.target.value },()=>{
			console.log(this.state.price);
		});
	}
	givenPeopleFunk(e){
		this.setState({ people: e.target.value },()=>{
			console.log(this.state.people);
		});
	}

	handleClick = (e) => {
    e.preventDefault();
    const method = "POST";
    const body = new FormData(document.getElementById('form'));

    return fetch('url', {
      method,
      body
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          inputText:''
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
				<Calculator price={this.state.price} people={this.state.people} onClick={this.handleClick}/>
			</div>
		);
	}
}

export default Home;
