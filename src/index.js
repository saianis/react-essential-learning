import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backCountry: 30,
  goal: 100
}

const getPercent = decimal => {
  return decimal * 100 + '%'
}

const calGoalProcess = (total, goal) => {
  return getPercent(total/goal);
}

// Function components
const SkiDayCounter = ({total, powder, backCountry, goal}) => {
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
        <p>Goal Progress: {calGoalProcess(total, goal)}</p>
      </div>
    </section>
  )
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
