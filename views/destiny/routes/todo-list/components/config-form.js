/* eslint-disable */

import React, { PropTypes } from 'react';
import { inject, observer } from "mobx-react";

// eslint-disable-next-line
import Tabs from 'antd/lib/tabs';
import{Row, Col, Radio } from 'antd';
const RadioGroup = Radio.Group;

// 常量定义：
const [A_ALARM_TYPE, B_ALARM_TYPE, C_ALARM_TYPE] = ['21', '22', '23'];
// 设备告警类型
const MIX_ALARM_DETAIL = {
	[A_ALARM_TYPE]: '以“断电”告警产生的时间作为标准时间，前十分钟内，有震动告警产生，则会产生A类组合告警',
	[B_ALARM_TYPE]: '以“移位”告警产生的时间作为标准时间，前十分钟内，有震动告警产生，则会产生B类组合告警',
	[C_ALARM_TYPE]: '以“启动”告警产生的时间作为标准时间，前十分钟内，有震动告警产生，则会产生C类组合告警',
};
// 超级管理员类型
const ADMINISTRATOR_TYPE = '1';
@inject("configStore") @observer
export default class ConfigForm extends React.Component {
    constructor(props) {
		super(props);
    }
    render() {
        const {id2Config } = this.props.configStore;
        const {item} = this.props;
		return (
			<div key={item.alarmId} className="mix-set-item">
				<p className="mix-alarm-detail"> {MIX_ALARM_DETAIL[item.alarmId]}：</p>
				<div className="mix-item-form">
					<div className="row">
						<div className="ant-col-5 label">实时提示：</div>
						<div className="ant-col-19 as-input">
							<RadioGroup onChange={e => this.props.configStore.onRemindChange(item.alarmId, e)} defaultValue={item.isRemind || 0} value={id2Config[item.alarmId].isRemind}>
								<Radio key={1} value={1}>显示</Radio>
								<Radio key={0} value={0}>不显示</Radio>
							</RadioGroup>
						</div>
					</div>
					<div className="row">
						<div className="ant-col-5 label">语音提示：</div>
						<div className="ant-col-19 as-input">
							<RadioGroup onChange={e => this.props.configStore.onVoiceChange(item.alarmId, e)} disabled={id2Config[item.alarmId].isRemind === 0} defaultValue={item.isVoice || 1}value={id2Config[item.alarmId].isVoice}>
								<Radio key={1} value={1}>开启</Radio>
								<Radio key={0} value={0}>关闭</Radio>
							</RadioGroup>
						</div>
					</div>				
					
				</div>
			</div>
		);
	}
}
