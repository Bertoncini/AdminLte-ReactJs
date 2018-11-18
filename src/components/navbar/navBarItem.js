import React, { Component } from "react";
import NavBar from "./index";

export default class NavBarItem extends Component {
    generateNotify(notify) {
        return <span class={`label ${notify.color}`}>{notify.message}</span>
    }
    generateLink() {
        return (<a href={this.props.url}>
            {this.props.icon ? <i class={`fa ${this.props.icon}`} /> : null}
            {this.props.title}
            {this.props.submenu ? <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span> : null}
            {this.props.notify ? <span class="pull-right-container">{this.props.notify.map(this.generateNotify)}</span> : null}
        </a>);
    }
    generateSubmenu() {
        return <NavBar items={this.props.submenu} />
    }
    generateContent() {
        var content = [this.generateLink()];
        if (this.props.submenu) {
            content.push(this.generateSubmenu());
        }
        return content;
    }
    render() {
        var content = this.generateContent();
        return (
            <li class="treeview">
                {content}
            </li>
        );
    }
}