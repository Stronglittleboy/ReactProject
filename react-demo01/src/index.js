import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
function App(){
    return (
        <div>
            <Welcome name="李白"/>
            <Welcome name="杜甫"/>
            <Welcome name="王一帆"/>
        </div>
    );
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
