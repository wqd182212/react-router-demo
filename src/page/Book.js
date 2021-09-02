import React from "react";
import { Route, Link } from "react-router-dom";
import BOne from "./b/BOne";
import BTwo from "./b/BTwo";

function Top() {
    return (
        <div className="book">
            <div className="book-top">
                <ul>
                    <li><Link to="/b/one">one</Link></li>
                    <li><Link to="/b/two">two</Link></li>
                </ul>
            </div>
            <div className="book-content">
                <Route path="/b/one" component={BOne}></Route>
                <Route path="/b/two" component={BTwo}></Route>
            </div>
        </div>
    );
}

export default Top;