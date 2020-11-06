import React from 'react'
import moment from 'moment'

/*分离样式*/
class Clock extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        console.log("开始挂载")
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        console.log("开始卸载")
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {moment(this.state.data).format('yyyy-MM-DD HH:mm:ss')}.</h2>
            </div>
        );
    }
}

export default Clock;