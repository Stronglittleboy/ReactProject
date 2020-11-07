import React from 'react';
function ActionLink(){
    function handleClick(e){
        e.preventDefault()
        console.log("This link was Clicked")
    }
    return (
        <a href="www.baidu.com" onClick={handleClick}>
            Click me
        </a>
    );
}
export default ActionLink;