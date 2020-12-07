import React, { Component } from 'react';
import axios from 'axios';

const ROOT_URL = 'http://localhost:5000';
const getTaskDoer = task => {
    if (task.status != 'OPEN') {
        return task.taskDoer;
    } else {
        return (null);
    }
}

const Task = props => (
    <div>
        {props.task.taskRequester}
        {props.task.status}
        {props.task.title}
        {props.task.description}
        {props.task.dueDate}
        {props.task.startLoc}
        {props.task.endLoc}
        {getTaskDoer(props.task.status)}
    </div>
);

export default class MyTasks extends Component {
    constructor(props) {
        super();
        this.state = { tasks: [] };
    }

    componentDidMount() {
        axios.get(`${ROOT_URL}/tasks`)
            .then(res => {
                console.log('hi');
                this.setState({ tasks: res.data });
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                { this.state.tasks.map(task => {
                    // return <Task task={task} />
                return <div>task: {task.title}</div>
                })}
            </div>
        )
    }
}