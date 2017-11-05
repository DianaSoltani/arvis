import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';

class ButtonMessage extends React.Component {
  // Setting propTypes ensure that your component is used correctly
  static propTypes = {
    
    button: PropTypes.object,
    title: PropTypes.string,
    onClick:PropTypes.func

  }

  render() {
  	const {button, title, onClick}= this.props;
  	return( 	
	  	<div>
	  		<div>
		  	<button 
		  		id='1'
		  		className = "myButton"
                onClick={onClick/*this.handleClickChange*/}
                title={"Click here for more information on disaster situations"}
            >
            Click here for more information on disaster situations.
            </button>
            </div>
            <div>
            <button 
            	id='2'
            	className = "myButton"
                onClick={onClick/*this.handleClickChange*/}
                title={"Click here for more information on social issues"}
            >
            Click here for more information on social issues.
            </button>
            </div>
	  	</div>
	);
  }

}

export default ButtonMessage;
