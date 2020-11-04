import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function formatDate(date){
    return date.toLocaleDateString();
}

const  compent = {
    data:new Date(),
    text:'I hope you enjoy learning React',
    author:{
        name:'李白',
        avatarUrl:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
    }
}

ReactDOM.render(
    <Comment date = {compent.data}
             text = {compent.text}
             author={compent.author}

    />,
    document.getElementById('root')
);
