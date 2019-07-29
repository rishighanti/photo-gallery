import React, { Component } from 'react';
import './PhotoNav.scss';

export default class PhotoNav extends Component {
    render() {
        return (
            <div className={this.props.className} onClick={this.props.onClick} />
        );
    }
}
