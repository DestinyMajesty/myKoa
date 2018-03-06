import { Message } from 'antd';

const msgTime = 2;
export default function apiInfo(data, showError) {
	let info;
	if (data.then) {
		info = data;
	} else {
		const {url, reqData} = data;
		console.log('url-->',url);
		console.log('reqData-->',reqData);
		
		info = fetch(url, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(reqData),
			credentials: 'include'
		});
    }
    
	return new Promise(function(resolve, reject) {
		info.catch((err) => {
			Message.error('网络连接错误', msgTime);

			reject(err);
		}).then((res) => res.json()).then((res) => {
			res = res || {
				errno: -1,
				errmsg: '请求失败，请重试'
			};
			if (res.errno === 0) {
                console.log(res)
				resolve(res.data);
			} else {
				showError !== false && Message.error(res.errmsg, msgTime);		
				let err = new Error(res.errmsg);
				err.errno = res.errno;
				err.errmsg = res.errmsg;
				reject(err);
			}
		});
	});
}
