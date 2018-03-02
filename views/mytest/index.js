
import React from 'react';
const R = require('ramda');


class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            result:'',
        }
    }
    componentDidMount(){
        this.setState({
            result:  R.pipe(R.split(' '),R.map(R.length),R.reduce(R.max, 0))(this.state.text)
        })
    }

    // 柯丽华
    match = R.curry((what,str) =>{
        return str.match(what);
    })

    map = R.curry((f, ary) => {
        return ary.map(f);
    });
    
    // 以空格分割单词
    splitBySpace = s => s.split(' ');

    // 每个单词的长度
    getLength = w => w.length;

    // 词的数组转换成长度的数组
    getLengthArr = arr => R.map(this.getLength, arr); 

    // 返回较大的数字
    getBiggerNumber = (a, b) => a > b ? a : b;

    // 返回最大的一个数字
    findBiggestNumber = arr => R.reduce(this.getBiggerNumber, 0 ,arr);

    getLongestWordLength = R.pipe(
        this.splitBySpace,
        this.getLengthArr,
        this.findBiggestNumber
    );

    render() {
        const {text,result} = this.state;
        return (
            <div>
                <h1 >text: {text} </h1>
                <h1>请问其中最长的单词有多少个字符</h1>
                <h1 >result: {result} </h1>                
            </div>
        );
    }
}
export default Hello;