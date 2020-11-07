import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from './Home';
import Clock from './Clock'
import Comment from "./Comment";
import ActionLink from "./ActionLink";
import Toggle from "./Toggle";
import FilterableProductTable from "./FilterableProductTable"

class App extends React.Component {
    render(){
        return(
            <Router >
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/comment" component={Comment} />
                    <Route path="/clock" component={Clock} />
                    <Route path="/actionLink" component={ActionLink} />
                    <Route path="/togglenOn" component={Toggle} />
                    <Route path="/productRow" component={FilterableProductTable} />
                </div>
            </Router>
        )
    }
}
export default App;