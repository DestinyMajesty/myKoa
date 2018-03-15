/* eslint-disable */

import React from 'react';
import { inject, observer } from "mobx-react";
// eslint-disable-next-line
import { Row, Col, Tabs, message } from 'antd';
import ConfigForm from './config-form';
const TabPane = Tabs.TabPane;
// 常量定义：
const [A_ALARM_TYPE, B_ALARM_TYPE, C_ALARM_TYPE] = ['21', '22', '23'];
const MIX_SORT_LIST = [A_ALARM_TYPE, B_ALARM_TYPE, C_ALARM_TYPE];
// 设备告警类型
const MIX_ALARM_TYPE = {
	[A_ALARM_TYPE]: 'A类告警',
	[B_ALARM_TYPE]: 'B类告警',
	[C_ALARM_TYPE]: 'C类告警',
};

@inject("configStore") @observer
export default class ConfigureModal extends React.Component {
	constructor(props) {
        super(props);
        console.log(this.props.configStore)
	}
	componentDidMount() {
		this.props.configStore.loadAlarmConfig();
    }
        // 渲染组合告警配置的tab页
        
	renderMixAlarmTabs = (list) => {
		if (list instanceof Array) {
			const panes = list.map((item, index) => {
				return {
					title: MIX_ALARM_TYPE[item.alarmId],
					content: <ConfigForm item={item} />,
					key: item.alarmId,
				};
			});
			return (
				<Tabs >
					{panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
				</Tabs>
			);
		}
		return null;
	}

	render() {
        const { configListInOrder, btnLoading } = this.props.configStore;

		return (
            <Row>
                <Col span={24}>
                    {this.renderMixAlarmTabs(configListInOrder)}
                </Col>
            </Row>
		);
	}
}
