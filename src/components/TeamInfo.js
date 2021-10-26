import React from 'react'


class TeamInfo extends React.Component {
  render() {
    const { shortName, crestUrl, venue, address, email, phone, founded } = this.props.team

    return (
      <div className="col-3 my-3">
        <div className="p-4 border border-2 ">
            <img src={crestUrl} className="img-fluid mb-3" alt=""/>
            <h2 className="text-primary text-center mb-3">{shortName}</h2>
            <p className="ms-1">{venue}</p>
            <p className="ms-1">{address}</p>
            <p className="text-info ms-1">{email}</p>
            <p className="ms-1">{phone}</p>
            <p className="ms-1">{founded}</p>
        </div>
      </div>
    )
  }
}

export default TeamInfo