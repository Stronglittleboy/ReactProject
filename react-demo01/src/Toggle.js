import React from 'react';

class Toggle extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isToggle: false,
        }
        /*绑定this*/
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggle: !state.isToggle
        }));
    }

    render() {
        return (<button onClick={this.handleClick}>
            {this.state.isToggle ? 'NO' : 'OFF'}
        </button>)
    }
}
export default Toggle;