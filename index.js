/**
 * yaw - Self-hosted Git server
 *
 * This is the main file of the package
 */
const {
  Git, GitBuilder, GitServer, GitStatus
} = require('./lib/index.js');
const {
  GitError, GitErrorType, GitErrorCode
} = require('./lib/errors.js');
if (typeof module !== 'undefined' && module.exports){
  module.exports = {
    Git, GitBuilder, GitServer, GitStatus,
    GitError, GitErrorType, GitErrorCode
  };
} else {
  window.Git = {
    Git, GitBuilder, GitServer, GitStatus,
    GitError, GitErrorType, GitErrorCode
  };
}
if (typeof window !== 'undefined'){
  throw new Error('window is not defined');
}