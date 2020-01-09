import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import FundList from './FundsList';
import FundDetails from "./FundDetails";
import Homepage from './Homepage'

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div className="ui body">
                    <Route path="/" exact component={Homepage} />
                    <Route path="/explore" exact component={FundList} />
                    <Route path="/explore/:code" component={FundDetails} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;