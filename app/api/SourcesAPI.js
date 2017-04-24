import axios from 'axios';

const SOURCES_API_URL = 'https://newsapi.org/v1/sources';

module.exports = {
  /**
   * Get the Sources of News
   * @return {object} The sources of the New
   */
  getSources() {
    return axios.get(SOURCES_API_URL).then(res => res, res => res);
  }
};
