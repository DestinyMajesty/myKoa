
import React from 'react';
const R = require('ramda');  

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data : {
                result: "SUCCESS",
                interfaceVersion: "1.0.3",
                requested: "10/17/2013 15:31:20",
                lastUpdated: "10/16/2013 10:52:39",
                tasks: [
                    {id: 104, complete: false,            priority: "high",
                              dueDate: "2013-11-29",      username: "Scott",
                              title: "Do something",      created: "9/22/2013"},
                    {id: 105, complete: false,            priority: "medium",
                              dueDate: "2013-11-22",      username: "Lena",
                              title: "Do something else", created: "9/22/2013"},
                    {id: 107, complete: true,             priority: "high",
                              dueDate: "2013-11-22",      username: "Mike",
                              title: "Fix the foo",       created: "9/22/2013"},
                    {id: 108, complete: false,            priority: "low",
                              dueDate: "2013-11-15",      username: "Punam",
                              title: "Adjust the bar",    created: "9/25/2013"},
                    {id: 110, complete: false,            priority: "medium",
                              dueDate: "2013-11-15",      username: "Scott",
                              title: "Rename everything", created: "10/2/2013"},
                    {id: 112, complete: true,             priority: "high",
                              dueDate: "2013-11-27",      username: "Lena",
                              title: "Alter all quuxes",  created: "10/5/2013"}
                    // , ...
                ]
            },
            result:'',
        }
    }
    componentDidMount(){
        console.log('result-->',this.getIncompleteTaskSummaries('Scott')(this.state.data))
    }
    // 找到某用户的所有未完成任务，并按到期日期升序排列
    getIncompleteTaskSummaries = (membername) =>
    R.pipe(
        R.prop('tasks'),
        R.filter(R.propEq('username')(membername)),
        R.reject(R.propEq('complete')(true)),
        R.map(R.pick(['id','dueDate','title','priority'])),
        // R.sortBy(R.prop('dueDate'))
        R.sortWith([R.descend(R.prop('dueDate'))])
    ); 

    render() {
        const {text,result} = this.state;
        return (
            <div>
                <h1 >找到用户 Scott 的所有未完成任务，并按到期日期升序排列 </h1>            
            </div>
        );
    }
}
export default Task;