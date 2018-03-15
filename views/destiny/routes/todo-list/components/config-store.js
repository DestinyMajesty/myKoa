import { observable, action,computed } from 'mobx';
const R = require('ramda');

const [A_ALARM_TYPE, B_ALARM_TYPE, C_ALARM_TYPE] = ['21', '22', '23'];
const MIX_SORT_LIST = [A_ALARM_TYPE, B_ALARM_TYPE, C_ALARM_TYPE];

class ConfigStore {

    @observable configList = [];

    constructor() {
        // 初始化
    }

    @computed get id2Config() {
        const id2Config = {};
        this.configList.forEach((item, index) => {
			id2Config[item.alarmId] = {
				...item,
			};
		});
		return id2Config;
    }

    @computed get configListInOrder() {
        // 对组合告警配置列表按照A、B、C顺序排序
        return this.configList.sort((a, b) => MIX_SORT_LIST.indexOf(a.alarmId) - MIX_SORT_LIST.indexOf(b.alarmId));
    }

    @action loadAlarmConfig = () => {
        this.configList = [
            {
                alarmId: '22',
                isRemind: 0, // 是否实时提醒：0(否)、1(是)；
                isVoice: 0, // 是否语音告警：0(否)、1(是)；
            },
            {
                recId: '555555',
                alarmId: '21',
                isRemind: 1, // 是否实时提醒：0(否)、1(是)；
                isVoice: 0, // 是否语音告警：0(否)、1(是)；
            },
            {
                alarmId: '23',
                isRemind: 1, // 是否实时提醒：0(否)、1(是)；
                isVoice: 1, // 是否语音告警：0(否)、1(是)；
            },
        ];
    }

    @action onRemindChange = (alarmId, e) => {
		this.id2Config[alarmId].isRemind = e.target.value;
		if (e.target.value === 0) {
			this.id2Config[alarmId].isVoice = 0;
        }
        this.configList = R.values(this.id2Config);
    }
    
    onVoiceChange = (alarmId, e) => {
		this.id2Config[alarmId].isVoice = e.target.value;
        this.configList = R.values(this.id2Config);
	}
}

const configStore = new ConfigStore();

export { configStore }