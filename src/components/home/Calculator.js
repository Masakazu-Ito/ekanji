import React from 'react';
import {Link} from 'react-router-dom';

class  Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    console.log(this.props.price);
    console.log(this.props.people);
    return(
      <div>
        <ul>
          <li>
            <Link to={{
              pathname: './Confirm',
              // props:{
              //   price: 'this.props.price',
              //   people: 'this.props.people'
              // }
            }}
            >割り勘</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Calculator;