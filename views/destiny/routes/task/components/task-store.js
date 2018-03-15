import { observable, action } from 'mobx';

class TaskStore {
    @observable taskList;
    @observable finishFliter;

    constructor() {
        this.taskList = [];
        this.finishFliter = 'all';
    }

    @action loadTaskList = () => {
        apiInfo({
            url: '/api/users/getUser',
            reqData: {
                cmd: 'queryUserName',
            }
        }).then((data) => {
            console.log(data);
            this.taskList = data.username;
        })
    }
}

const taskStore = new TaskStore();

export { taskStore }