export default {
  /**
   * Returns a saved item in localstorage
   * @param {string} name - the name of the item to save
   * @return {object} saved message
   */
  get(name) {
    try {
      return JSON.parse(localStorage.getItem(name));
    } catch (e) {
      return null;
    }
  },

  /**
   * Deletes an item in localstorage
   * @param {string} name - the name of the item to save
   * @return {object} saved message
   */
  delete(name) {
    return localStorage.removeItem(name);
  },

  /**
   * Saves an Item in the Local Storage
   * @param {string} name - the name of the item to save
   * @param {object} content - the values to save
   * @return {string} saved message
   */
  set(name, content) {
    localStorage.setItem(name, JSON.stringify(content));
  }
};
