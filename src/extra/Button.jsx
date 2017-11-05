import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component{

  static propTypes = {
    /**
     * Text to display inside the button
     */
    title: PropTypes.string,
    /**
     * Handler to be called when the user taps the button
     */
    onClick: PropTypes.func,

    label:PropTypes.string

  };

  render() {
    const { title, label, onClick } = this.props;
    return(
      <div>
        <label htmlFor={label}>{label}</label>
        <button 
          id={label}
          type="text"
          title={title} 
          onClick={onClick}
        />
      </div>
    );
  }

}

//module.exports = Button;
export default Button;