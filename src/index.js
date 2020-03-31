import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backCountry: 30,
  goal: 100
}

// React Component
//  Note: All component names must start with Uppercase letter
class SkiDayCounter extends Component {

  // custom methods
  getPercent = decimal => {
    return decimal * 100 + '%'
  }

  calGoalProcess = (total, goal) => {
    return this.getPercent(total/goal);
  }

  render() {
    // ES6 destructuring 
    const {total, powder, backCountry, goal} = this.props
    return (
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backCountry}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calGoalProcess(total, goal)}</p>
        </div>
      </section>
    )
  }

}


render(
  <SkiDayCounter 
  total={skiData.total}
  powder={skiData.powder}
  backCountry={skiData.backCountry}
  goal={skiData.goal}
  />, 
  document.getElementById('root')
)
