import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func
  }

  render() {
  	const {label, value, onChange, onKeyPress} = this.props;
  	return(
  		<div>
  			<label htmlFor={label}>{label}</label>
  			<input
  				id={label}
  				type = "text"
  				value={value}
  				onChange={onChange}
  				onKeyPress={onKeyPress}
  			/>
  		</div>
  	);
  }
}

export default Input;
