import React from 'react';
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>示例首页</div>
                <ul>
                    <li><Link to='/comment'>comment</Link></li>
                    <li><Link to='/clock'>生命周期</Link></li>
                    <li><Link to='/actionLink'>自定连接</Link></li>
                    <li><Link to='/coditionRendering'>条件渲染</Link></li>
                    <li><Link to='/togglenOn'>条件渲染-开关</Link></li>
                    <li><Link to='/productRow'>React哲学</Link> </li>
                </ul>
            </div>
        );
    }
}
export default Home;