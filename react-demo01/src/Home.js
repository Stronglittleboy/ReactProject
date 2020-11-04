import React from 'react';
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>示例首页</div>
                <div>
                    <Link to="/comment/" style={{color: 'black'}}>
                        <div>点击跳转到提取组件</div>
                    </Link>
                    <Link to="/clock/" style={{color: 'black'}}>
                        <div>点击跳转到时钟组件</div>
                    </Link>
                    <Link to="/Page3/" style={{color: 'black'}}>
                        <div>点击跳转到Page3</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;