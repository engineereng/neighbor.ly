import { Button } from 'antd';
import { Component } from 'react';
import {auth} from '../util/firebase';

class Logout extends Component {
  logout() {
    auth().signOut().then(function() {
      // Sign-out successful.
      console.log("logged out");
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return <Button onClick={() => this.logout()}>Log Out</Button>
  }
}

export default Logout;