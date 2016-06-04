import { RSAA } from 'redux-api-middleware';
import { routerActions } from 'react-router-redux';

import config from 'config';
import { ActionTypes } from 'constants/index';

/**
 * @module Actions
 * @desc Actions
 */

/**
 * Fetch popular artists.
 *
 * @function
 * @param {string} [query]
 *
 * @returns {Object}
 */
export function fetchArtists(query) {
  return {
    [RSAA]: {
      endpoint: `${config.apiUrl}artists${(query ? `?${query}` : '')}`,
      method: 'GET',
      types: [
        'ARTISTS_REQUEST',
        'ARTISTS_SUCCESS',
        'ARTISTS_FAILURE'
      ]
    }
  };
}

/**
 * Fetch popular tracks.
 *
 * @function
 * @param {string} [query]
 *
 * @returns {Object}
 */
export function fetchPopular(query) {
  return {
    [RSAA]: {
      endpoint: `${config.apiUrl}popular${(query ? `?${query}` : '')}`,
      method: 'GET',
      types: [
        'POPULAR_REQUEST',
        'POPULAR_SUCCESS',
        'POPULAR_FAILURE'
      ]
    }
  };
}

/**
 * Fetch last week tracks.
 *
 * @function
 * @param {string} [query]
 *
 * @returns {Object}
 */
export function fetchLastWeek(query) {
  return {
    [RSAA]: {
      endpoint: `${config.apiUrl}popular?mode=lastweek${(query ? `&${query}` : '')}`,
      method: 'GET',
      types: [
        'LASTWEEK_REQUEST',
        'LASTWEEK_SUCCESS',
        'LASTWEEK_FAILURE'
      ]
    }
  };
}

/**
 * Change route path.
 *
 * @function
 * @param {string} pathname
 *
 * @returns {Object}
 */
export function goTo(pathname) {
  return routerActions.push(pathname);
}

/**
 * Show a message.
 *
 * @function
 * @param {string} status - Message type: success, warning, error, info.
 * @param {string} message
 * @param {boolean} withTimeout - Should close after a while.
 *
 * @returns {Object}
 */
export function showAlert(status, message, withTimeout = true) {
  return {
    type: ActionTypes.SHOW_ALERT,
    status,
    message,
    withTimeout
  };
}

/**
 * Hide message.
 *
 * @function
 * @param {string} [status]
 *
 * @returns {Object}
 */
export function hideAlert(status = 'info') {
  return {
    type: ActionTypes.HIDE_ALERT,
    status,
    message: ''
  };
}
