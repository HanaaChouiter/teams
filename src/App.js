import React from 'react'

import teams from './teams.json'
import TeamInfo from './components/TeamInfo'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1  class="text-primary">Teams</h1>
        <div className="row">
          {teams.map(team => <TeamInfo team={team} />)}
        </div>
      </div>
    )
  }
}

export default App