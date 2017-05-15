import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ShareButtons,
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

/**
 * @class Share
 * @desc Class to display news
 * @extends React.Component
 */
class Share extends Component {

  /**
   * @desc Set the Initial conditions for sharing the News
   * @param {object} props - The property of the Share Class
   */
  constructor(props) {
    super(props);
    this.props = props;
  }

  /**
   * @desc Display the News Share
   * @return {jsx} The News Share Logo
   */
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
/**
 * @desc Set the PropTypes for Share
 */
Share.propTypes = {
  params: PropTypes.object,
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Share;
