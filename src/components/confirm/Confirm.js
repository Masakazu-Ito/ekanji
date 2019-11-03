import React from 'react';
import Charge from './Charge';
import Difference from './Difference';
import NumberOfPeople from './NumberOfPeople';
import GoRoulette from './GoRoulette';

class Confirm extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

render(){
  const pay = 3000;//受け取る

    return(
      <div>
        <Charge charge={pay} />
        <Difference difference={pay - this.props.price/this.props.people}　/>
        <NumberOfPeople People={this.props.people}/>
        <GoRoulette />
      </div>
    );
  }
}

export default Confirm;