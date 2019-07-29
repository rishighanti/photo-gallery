import React, { Component } from 'react';
import './FullPhoto.scss';

export default class FullPhoto extends Component {
    render() {
        if (!this.props.photoURL) {
            return (<div />);
        }
        return (
            <div className="fullPhoto" onKeyDown={this.handleKeyDown}>
                <p className="caption">{this.props.photoURL.caption}</p>
                <img alt={this.props.photoURL.caption} src={"./images/" + this.props.photoURL.url} />
                {this.props.children}
            </div>
        );
    }
}
