import { Card } from 'antd';
import { Component } from 'react';
import {auth} from '../util/firebase';
import axios from 'axios';

class Tasks extends Component {
  state = {
    user: null,
    tasks: []
  };

  componentDidMount = () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({user: user});
        axios.get(`http://localhost:5000/tasks/user/${user.uid}`)
        .then(response => {
          this.setState({tasks: response.data});
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    });
  };

  tasksList() {
    let count = 0;
    return this.state.tasks.map(task => {
      return <Card key={count++} title={task.title} style={{ width: 300 }}>
          <p>{task.description}</p>
          <p>{task.taskRequester}</p>
          <p>{task.taskDoer}</p>
          <p>{task.status}</p>
          <p>{task.dueDate}</p>
      </Card>
    })
  }

  render() {
    return (
      <>
      { this.tasksList() }
      </>);
  }
};

export default Tasks;