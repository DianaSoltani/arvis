import React from 'react';
import ButtonMessage from './ButtonMessage.jsx';
import Message from './Message.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import PropTypes from 'prop-types';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //messages: [{name: 'Arvis', message: 'Hello, I\'m Arvis and I\'m here to teach you something new!'}], 
      messages:[],
      // Initialize list of messages
      name: 'User',
      newMessage: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  renderMessageDiv(message, index) {
    return <Message key = {index} message = {message}/>;
  }

  /*renderButtonMessageDiv(index) {
    return <ButtonMessage key = {index}/>;
  }*/

  handleNameChange(event){
    this.setState({name: event.target.value});
  }
  handleMessageChange(event){
    this.setState({newMessage:event.target.value});
  }
  
  handleClickChange(event){

    const{name, messages, ButtonMessage, id} = this.state;
    /*/if (event.onClick === true){
      //this.setState({buttonMessages: buttonMessages.concat([{title: title, onClick: onClick}]), onClick: false});
    if( == '1'){
      this.setState({messages: messages.concat([{name: 'You wanted to know about', message: 'natural disasters'}]), newMessage: ''});
    }
    else if(== '2'){
      this.setState({messages: messages.concat([{name: 'You wanted to know about', message: 'social issues'}]), newMessage: ''});
    }//}*/
    if(id === '1'){
        this.setState({messages: messages.concat([{name: 'Arvis', message: 'You wanted to know about psychopathology'}]), newMessage: ''});
        //break;
    }
    if(id === '2'){
        this.setState({messages: messages.concat([{name: 'Arvis', message: 'You wanted to know about social issues'}]), newMessage: ''});
        //break;

    }
    //this.setState({messages: messages.concat([{name: 'Arvis', message:'Since the 1980s, the number of women pursuing a degree in computer science has drastically plummeted.\nLack of equal pay to male counterparts, intimidiation in the work environment, and lack of female role models are some among the many reasons for this change.\nDespite the statss, there are many women defying societal norms and taking on powerful roles in the tech industry. For a good and reliable source of facts, read \nHeather Cabot\'s Geek Girl Rising.'}]), newMessage:''});

    this.setState({messages: messages.concat([{name: 'Arvis', message:'Since the 1980s, the number of women pursuing a degree in computer science has drastically plummeted.\nLack of equal pay to male counterparts, intimidiation in the work environment, and lack of female role models are some among the many reasons for this change.\nDespite the statss, there are many women defying societal norms and taking on powerful roles in the tech industry. For a good and reliable source of facts, read \nHeather Cabot\'s Geek Girl Rising.'},{name: 'Arvis', message:'Mental illnesses are health conditions involving changes in thinking, emotion or behavior (or a combination of these), according to the American Psychological Association.\n'+
                                               'Nearly 1/5 U.S. adults experience some form of mental illness.\n'+
                                               '1/24 has a serious menal illness\n'+
                                               '1/12 has a substance use disorder.\n'+
                                               'Anxiety disorders are the most common mental illness in the US., yet only 36.9% receive treatment.\n'+
                                               'Major Depressive Disorder is the leading cause of disability in the U.S. for ages 15 to 44.3.\n'}]), newMessage:''});
   
    /*return(
      <div>
        <a href = "http://www.basicplanet.com/natural-disasters/"> Natural Disasters </a> 
        <a href = "http://www.lib.berkeley.edu/MRC/SocialIssues.html">Social Issues</a>
      </div>
    );*/
  }

  handleKeyPress(event){ //when enter is pressed
    const{name, newMessage, messages} = this.state;
    if (!name || !newMessage) {
      return;
    }

    if(event.key === 'Enter'){
      this.setState({messages: messages.concat([{name: name, message: newMessage}]), newMessage: ''});
    }

  }

  render() {
    // Iterates through the messages in state to create HTML elements
    // for each message
    
    const {newMessage, name, messages, buttonMessages, onClick} = this.state;
    const messageDivs = messages.map(this.renderMessageDiv);
   // const buttonMessageDivs = buttonMessages.map(this.renderButtonMessageDiv);

    return (
      <div>
        <h2>Learn Something New!</h2>
        <div>
          <ButtonMessage onClick={this.handleClickChange.bind(this)}
            value={name}
            message={newMessage}
          />
        </div>
        <div>
          {messageDivs}
        </div>
        <div>

          <Input label={'Message'} value={newMessage}
           onChange={this.handleMessageChange} onKeyPress={this.handleKeyPress} />
          <Input label={'Name'} value={name} onChange={this.handleNameChange} />

          

        </div>      
      </div>

    );
  }
}

export default App;

/*
{buttonMessageDivs}
<div>
              <Button={titleB1}
                onClick={this.handleClickChange}
                title={titleB1}
              />
              <Button={titleB2}
                onClick={this.handleClickChange}
                title={"Click here for more information on social issues"}
              />
            />
</div>}*/