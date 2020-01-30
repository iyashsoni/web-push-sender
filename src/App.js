import React from 'react';
import './App.css';
import PushForm from './components/PushForm';
import Header from './components/Header'
import Push from 'easy-web-notifications';
import {Fab, Container} from '@material-ui/core'

const applicationServerPublicKey = "BNqEgHEqLOmF_B5rAkjwbFiTr6k5HzthWYul3UmorHOKXeXubI1D0oRw-nMN30ju6KTle2b_q9vNY1LAFtCz9B8";

class App extends React.Component {
  constructor() {
    super();
    let registration = (localStorage.getItem("token")) ? true : false;
    this.state = {
      isRegistered: registration
    };
    this.register = this.register.bind(this);
  }

  register() {
    Push.requestPermissionAndGetToken(applicationServerPublicKey).then(res => {
      console.log("Token is : \n" + JSON.stringify(res));
      localStorage.setItem("token", JSON.stringify(res));
      this.setState({isRegistered: true})
    }).catch(err => {
      console.log("Registration Failed" + err);
    });
  }

  render() {
    let view;
    if(this.state.isRegistered) {
      view = <PushForm />
    } else {
      view =  <div>
                <h3>Seems like you don't have the permission yet, please click the button below and allow Notification Permissions!</h3>
                <Fab variant="extended" color="primary" onClick={this.register}>Register</Fab>
              </div>
    }
    return (
      <Container className="App">
        <Header />
        {view}
      </Container>
    );
  }
}

export default App;
