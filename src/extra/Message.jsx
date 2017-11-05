import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component {
  // Setting propTypes ensure that your component is used correctly
  static propTypes = {
    message: PropTypes.object
  }

  render() {
  	const {name, message}= this.props.message;
  	return <p className="message">{name} : {message}</p>
  }
}

export default Message;