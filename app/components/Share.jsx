import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';


const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

class Share extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const shareUrl = this.props.url;
    const title = this.props.title;

    return (
      <div className="Share__container">
        <div className="Share__button">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="Share__button__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        </div>
        <div className="Share__button">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Share__button__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
        </div>
        <div className="Share__button">
          <GooglePlusShareButton
            url={shareUrl}
            className="Share__button__share-button">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>
        </div>

        <div className="Share__button">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Share__button__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
        </div>
      </div>
    );
  }
}

export default Share;
