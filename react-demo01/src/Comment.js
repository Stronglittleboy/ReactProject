import React from "react";
import moment from 'moment'

function Connect(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

/*抽取用户信息*/
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

/*抽取图像*/
function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}

function formatDate(date) {
    return moment(date).format('yyyy-MM-dd');
}

const temp = {
    data: new Date(),
    text: 'I hope you enjoy learning React',
    author: {
        name: '李白',
        avatarUrl: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
    }
}

function Comment(){
    return <Connect date={temp.data}
                    text={temp.text}
                    author={temp.author}/>
};

export default Comment;