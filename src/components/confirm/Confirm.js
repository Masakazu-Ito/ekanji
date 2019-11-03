import React from 'react';
import Charge from './Charge';
import TotalChange from './TotalChange';
import ParticipantNum from './ParticipantNum';
import GoRoulette from './GoRoulette';

class Confirm extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

render(){
  const individual_fee = 3000;//受け取る
  const total_change = 1470;

    return(
      <div>
        <Charge individual_fee={individual_fee} />
        <TotalChange total_change= {total_change}　/>
        {/* <ParticipantNum participant_num={this.props.participant_num}/> */}
        {/* 中間発表用 */}
        <GoRoulette />
      </div>
    );
  }
}

export default Confirm;