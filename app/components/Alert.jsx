import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Class displaying an alert
 * @extends React.Component
 */
class Alert extends Component {

  /**
   * Displays Alert Message.
   * @return {string} Alert Message.
   */
  getAlert() {
    if ((this.props.message !== undefined) && (this.props.message.length > 0)) {
      const type = `alert alert-${this.props.alertType}`;
      return <div className={ type } role="alert"> { this.props.message } </div>;
    }
  }

  /**
   * Renders the Alert Message
   * @return {string} Alert.
   */
  render() {
    return (
      <div>
          { this.getAlert() }
      </div>
    );
  }
}

/**
 * Set the PropTypes for alert
 */
Alert.propTypes = {
  message: PropTypes.string,
  alertType: PropTypes.string
};

export default Alert;
