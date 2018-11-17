import React, { Component } from "react";
import NavBarItem from "./navBarItem";

export default class NavBar extends Component {
    generateItem(item) {
        return <NavBarItem text={item.text} url={item.url} submenu={item.submenu} />
    }
    render() {
        if (!this.props.item)
            return (null);

        var items = this.props.items.map(this.generateItem);
        return (
            <ul className="menu">
                {items}
            </ul>
        );
    }
}