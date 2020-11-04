import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Comment from './Comment'
import Clock from './Clock'

class App extends React.Component {
    render(){
        return(
            <Router >
                <div>
                    <Route path="/" component={Home} />
                    <Route path="/comment" component={Comment} />
                    <Route path="/clock" component={Clock} />
                    {/*<Route path="/Page3" component={Page3} />*/}
                </div>
            </Router>
        )
    }
}
export default App;