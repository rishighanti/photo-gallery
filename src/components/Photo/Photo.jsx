import React, { Component } from 'react';
import './Photo.scss';

export default class Photo extends Component {
    render() {
        var divStyle = {
            backgroundImage: 'url(images/' + this.props.photoURL.url + ')'
        };
        return (
            <div className={"photoPreview " + this.props.className} style={divStyle} onClick={this.props.onClick} />
        );
    }
}
