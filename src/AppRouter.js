import React from "react";
import Home from "./page/Home";
import Book from "./page/Book";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./app-router.css";
import { Menu } from "antd";

function AppRouter() {
    let config = [
        { path: "/", title: "a", exact: true, component: Home, id: "a" },
        { path: "/b", title: "b", exact: false, component: Book, id: "b" },
    ];
    return (
        <Router>
            <div className="page">
                <div className="left-bar">
                    <Menu
                        mode="inline"
                        theme="dark"
                        style={{width: 200, height: "100%", overflow: "auto"}}
                        defaultSelectedKeys={["a"]}
                    >
                        {
                            config.map(item => {
                                return (
                                    <Menu.Item key={item.id}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </Menu.Item>
                                );
                            })
                        }
                    </Menu>
                </div>
                <div className="content">
                    {
                        config.map(item => {
                            return (
                                <Route path={item.path} exact={item.exact} component={item.component}></Route>
                            );
                        })
                    }
                </div>
            </div>
        </Router>
    );
}

export default AppRouter;