import React, { Component } from 'react';
import { Swipeable } from "react-swipeable";
import PhotoNav from '../PhotoNav/PhotoNav';
import PhotoBlock from '../PhotoBlock/PhotoBlock';
import FullPhoto from '../FullPhoto/FullPhoto';
import './PhotoGallery.scss';

export class PhotoGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullScreenPhotoIndex: -1
        };

        this.handleFullPhotoClick = this.handleFullPhotoClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    };

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyDown, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyDown, false);
    }

    getNumImagesInPhotoBlock(blockIndex) {
        var layoutConfig = [1, 2, 3, 4];
        return layoutConfig[blockIndex % layoutConfig.length];
    }

    handleKeyDown(event) {
        if(event.keyCode === 37) {
            this.handlePhotoNavClick(1);
        } else if(event.keyCode === 39){
            this.handlePhotoNavClick(-1);
        } else if(event.keyCode === 27){
             this.handleFullPhotoClick();
        }
    }

    handleFullPhotoClick() {
        this.setState({fullScreenPhotoIndex: -1});
    }

    handlePhotoClick(photoIndex) {
        this.setState({fullScreenPhotoIndex: photoIndex});
    }

    handleBlockClick(blockStartIndex, cellIndex) {
        this.handlePhotoClick(blockStartIndex + cellIndex);
    }

    handlePhotoNavClick(delta) {
        var newImageIndex = this.state.fullScreenPhotoIndex + delta;
        if(newImageIndex < 0) {
            newImageIndex = this.props.photoURLs.images.length - 1;
        } else if (newImageIndex >= this.props.photoURLs.images.length) {
            newImageIndex = 0;
        }

        this.setState({fullScreenPhotoIndex: newImageIndex});
    }

    render() {
        var photoBlocks = [];
        var numImages = this.props.photoURLs.images.length;
        var currentImageIndex = 0;

        while(currentImageIndex < numImages) {
            var photoBlockImages = [];
            var photoBlockClickCallback = this.handleBlockClick.bind(this, currentImageIndex);

            var numImagesInBlock = this.getNumImagesInPhotoBlock(photoBlocks.length);
            for(var i = 0; i < numImagesInBlock && currentImageIndex < numImages; i++)
            {
                photoBlockImages.push(this.props.photoURLs.images[currentImageIndex++]);
            }
            photoBlocks.push( <PhotoBlock images={photoBlockImages} onPhotoClick={photoBlockClickCallback}/> );
        }

        var fullPhotoURL = null;
        var fullPhotoImageIndex = this.state.fullScreenPhotoIndex;
        if (fullPhotoImageIndex >= 0 && fullPhotoImageIndex < numImages) {
            fullPhotoURL = this.props.photoURLs.images[fullPhotoImageIndex];
        }

        return (
            <div className="photoGallery">
                { photoBlocks }
                <Swipeable
                    trackMouse
                    preventDefaultTouchmoveEvent
                    onSwipedLeft={() => this.handlePhotoNavClick(-1)}
                    onSwipedRight={() => this.handlePhotoNavClick(+1)}
                >
                    <FullPhoto photoURL={fullPhotoURL} onClick={this.handleFullPhotoClick}>
                        <PhotoNav className="photoNav close" onClick={this.handlePhotoNavClick.bind(this,  this.handleFullPhotoClick)}/>
                        <PhotoNav className="photoNav leftArrow" onClick={this.handlePhotoNavClick.bind(this, -1)}/>
                        <PhotoNav className="photoNav rightArrow" onClick={this.handlePhotoNavClick.bind(this, 1)}/>
                    </FullPhoto>
                </Swipeable>
            </div>
        );
    }
}

export default PhotoGallery;
