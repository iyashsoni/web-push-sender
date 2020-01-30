import React from 'react';
import {TextField, Fab, Container} from '@material-ui/core';
const firebase = require("firebase");
require("firebase/functions");

var firebaseConfig = {
  apiKey: "AIzaSyBorif13n91ElwK4iDewJcTFmrgqDnmu_c",
  authDomain: "web-push-sender-backend.firebaseapp.com",
  databaseURL: "https://web-push-sender-backend.firebaseio.com",
  projectId: "web-push-sender-backend"
};
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Functions through Firebase
var functions = firebase.functions();

class PushForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
  
      this.setMessage = this.setMessage.bind(this);
      this.sendNotification = this.sendNotification.bind(this);
    }
  
    setMessage(event) {
      this.setState({message: event.target.value});
    }
  
    sendNotification(event) {     
      var token = localStorage.getItem("token");
      var tokenJson = JSON.parse(token);

      var reqBody = {
        userAuth: tokenJson.userAuth,
        publicKey: tokenJson.userPublicKey,
        endpoint: tokenJson.endpoint,
        message: this.state.message
      }

      var sendNotificationFunction = functions.httpsCallable('sendNotification');
      sendNotificationFunction(reqBody).then(function(result) {
        console.log("Notification sent successfully...");
      }).catch(function(error) {
        var code = error.code;
        var message = error.message;
        var details = error.details;
        console.log("Error sending notification: ", code, message, details);
      }).finally(() => {
        this.setState({message: ''});
      });
    };
  
    render() {
      return (
        <Container fixed>
          <div>
            <TextField id="outlined-basic" label="Your message here" variant="outlined" value={this.state.message} onChange={this.setMessage} />
          </div>
          <br/>
          <Fab variant="extended" color="primary" onClick={this.sendNotification}>Send Notification</Fab>
          <br/>
          <br/>
          <h4>If you fail to receive notification, the token might have expired. Delete the token from <b>localStorage</b> and reset the permissions for Notification.</h4>
        </Container>
      );
    }
}

export default PushForm;