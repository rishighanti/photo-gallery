import React, { Component } from 'react';
import Photo from '../Photo/Photo';
import './PhotoBlock.scss';

export default class PhotoBlock extends Component {
    render() {
        var numImages = this.props.images.length;
        if (numImages === 1) {
            return (
                <div className="photoBlock">
                    <Photo onClick={this.props.onPhotoClick.bind(this, 0)} className="cell_1" photoURL={this.props.images[0]} />
                </div>
            );
        } else if (numImages === 2) {
            return (
                <div className="photoBlock">
                    <Photo onClick={this.props.onPhotoClick.bind(this, 0)} className="cell_2h" photoURL={this.props.images[0]} />
                    <Photo onClick={this.props.onPhotoClick.bind(this, 1)} className="cell_2h" photoURL={this.props.images[1]} />
                </div>
            );
        } else if (numImages === 3) {
            return (
                <div className="photoBlock">
                    <Photo onClick={this.props.onPhotoClick.bind(this, 0)} className="cell_2v" photoURL={this.props.images[0]} />
                    <Photo onClick={this.props.onPhotoClick.bind(this, 1)} className="cell_4" photoURL={this.props.images[1]} />
                    <Photo onClick={this.props.onPhotoClick.bind(this, 2)} className="cell_4" photoURL={this.props.images[2]} />
                </div>
            );
        } else {
            return (
                <div className="photoBlock">
                    <Photo onClick={this.props.onPhotoClick.bind(this, 0)} className="cell_4" photoURL={this.props.images[0]} />
                    <Photo onClick={this.props.onPhotoClick.bind(this, 1)} className="cell_4" photoURL={this.props.images[1]} />
                    <Photo onClick={this.props.onPhotoClick.bind(this, 2)} className="cell_4" photoURL={this.props.images[2]} />
                    <Photo onClick={this.props.onPhotoClick.bind(this, 3)} className="cell_4" photoURL={this.props.images[3]} />
                </div>
            );
        }
    }
}
