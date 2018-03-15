
import React from 'react';
import { inject, observer } from "mobx-react";
const R = require('ramda');

@inject("taskStore") @observer
class Task extends React.Component {
    constructor(props) {
        super(props);
        console.log("taskStore->>", this.props.taskStore);
    }

    componentDidMount() {
        this.props.taskStore.loadTaskList();
    }


    render() {
        const { taskList } = this.props.taskStore;
        return (
            <div>
                <ul >
                    {
                        taskList.map(item =>
                            <li key={item.toString()}>
                                {item}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}
export default Task;