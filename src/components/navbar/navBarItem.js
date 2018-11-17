import React, { Component } from "react";
import NavBar from "./index";

export default class NavBarItem extends Component {
    generateLink() {
        return <a href={this.props.url}>{this.props.text}</a>;
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
            <li>
                {content}
            </li>
        );
    }
}