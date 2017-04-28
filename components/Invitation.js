import React from 'react';

export default class Invitation extends React.Component {
  render () {
    const listOfInvitedPeople = React.Children.map(this.props.children, child => {
      return (
        <p>{child}</p>
      );
    });
    return (
      <div>
        <h1>You've been invited!</h1>
        {listOfInvitedPeople}
      </div>
    );
  }
}
