"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
const fse = require('fs-extra');

const path = require('path');

const errors = require('./errors'); // Used to filter the libraries to copy based on our package.json dependencies.


const WORKBOX_PREFIX = 'workbox-';
/**
 * This copies over a set of runtime libraries used by Workbox into a
 * local directory, which should be deployed alongside your service worker file.
 *
 * As an alternative to deploying these local copies, you could instead use
 * Workbox from its official CDN URL.
 *
 * This method is exposed for the benefit of developers using
 * [injectManifest()]{@link module:workbox-build.injectManifest} who would
 * prefer not to use the CDN copies of Workbox. Developers using
 * [generateSW()]{@link module:workbox-build.generateSW} don't need to
 * explicitly call this method, as it's called automatically when
 * `importWorkboxFrom` is set to `local`.
 *
 * @param {string} destDirectory The path to the parent directory under which
 * the new directory of libraries will be created.
 * @return {Promise<string>} The name of the newly created directory.
 *
 * @alias module:workbox-build.copyWorkboxLibraries
 */

module.exports =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (destDirectory) {
    const thisPkg = require('../../package.json'); // Use the version string from workbox-build in the name of the parent
    // directory. This should be safe, because lerna will bump workbox-build's
    // pkg.version whenever one of the dependent libraries gets bumped, and we
    // care about versioning the dependent libraries.


    const workboxDirectoryName = `workbox-v${thisPkg.version}`;
    const workboxDirectoryPath = path.join(destDirectory, workboxDirectoryName);
    yield fse.ensureDir(workboxDirectoryPath);
    const copyPromises = [];
    const librariesToCopy = Object.keys(thisPkg.dependencies).filter(dependency => dependency.startsWith(WORKBOX_PREFIX));
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = librariesToCopy[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        const library = _step.value;

        const mainFilePath = require.resolve(library);

        const srcPath = path.dirname(mainFilePath); // fse.copy() copies all the files in a directory, not the directory itself.
        // See https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy.md#copysrc-dest-options-callback

        copyPromises.push(fse.copy(srcPath, workboxDirectoryPath));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    try {
      yield Promise.all(copyPromises);
      return workboxDirectoryName;
    } catch (error) {
      throw Error(`${errors['unable-to-copy-workbox-libraries']} ${error}`);
    }
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();