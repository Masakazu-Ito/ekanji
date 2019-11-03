import React from 'react';
import {Link} from 'react-router-dom';

class  Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    console.log(this.props.total_fee);
    console.log(this.props.participant_num);
    return(
      <div>
        <ul>
          <li>
            <Link to={{
              pathname: './Confirm',
              // props:{
              //   total_fee: 'this.props.total_fee',
              //   participant_num: 'this.props.participant_num'
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