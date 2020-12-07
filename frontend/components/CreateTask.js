import { Form, Input, Button } from 'antd';
import { Component } from 'react';
import axios from 'axios';
import {auth} from '../util/firebase';

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class CreateTask extends Component {
  state = {
    user: null
  }

  componentDidMount = () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user: user});
      }
    });
  }

  onFinish = ({title, desc, date}) => {
    if (this.state.user) {
      console.log(title, desc, date, this.state.user.uid);
      axios.post('http://localhost:5000/tasks/add', {
        requesterID: this.state.user.uid,
        taskRequester: this.state.user.email,
        title: title,
        description: desc,
        dueDate: "2020-05-02T08:25:15.756+00:00",
        startLoc: [90, 90],
        endLoc: [120, 90],
        status: "OPEN"
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <>
      <Form
        layout={formLayout}
        initialValues={{ layout: formLayout }}
        onFinish={this.onFinish}
      >
        <Form.Item label="Task title" name="title">
          <Input placeholder="Enter title" />
        </Form.Item>
        <Form.Item label="Task Description" name="desc">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Task Due Date" name="date">
          <Input placeholder="Enter date" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
    )}
};

export default CreateTask;