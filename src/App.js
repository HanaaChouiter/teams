import React from 'react'

import teams from './teams.json'
import TeamInfo from './components/TeamInfo'

class App extends React.Component {
  render() {
    let team = teams.map(team=>(
      <TeamInfo name={team.shortName} />
    ))
    return (
      <div className="container">
        <h1  class="text-primary">Teams</h1>
        <div className="row">
         {team}
        </div>
      </div>
    )
  }
}

export default App