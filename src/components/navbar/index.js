import React, { Component } from "react";
import NavBarItem from "./navBarItem";

export default class NavBar extends Component {
    generateItem(item) {
        return <NavBarItem title={item.title} url={item.url} submenu={item.submenu} icon={item.icon} notify={item.notify} />
    }
    render() {
        if (!this.props.items)
            return (null);

        var items = this.props.items.map(this.generateItem);
        return this.props.raiz ? <ul class="sidebar-menu tree" data-widget="tree">{items}</ul> : <ul class="treeview-menu">{items}</ul>;
    }
}