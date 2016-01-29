/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.0.3-master-3d6077b
 */
(function( window, angular, undefined ){
"use strict";

(function() {
  'use strict';

  /**
   * @ngdoc module
   * @name material.libs.fabTrigger
   */
  angular
    .module('material.libs.fabTrigger', ['material.core'])
    .directive('mdFabTrigger', MdFabTriggerDirective);

  /**
   * @ngdoc directive
   * @name mdFabTrigger
   * @module material.libs.fabSpeedDial
   *
   * @restrict E
   *
   * @description
   * The `<md-fab-trigger>` directive is used inside of a `<md-fab-speed-dial>` or
   * `<md-fab-toolbar>` directive to mark an element (or elements) as the trigger and setup the
   * proper event listeners.
   *
   * @usage
   * See the `<md-fab-speed-dial>` or `<md-fab-toolbar>` directives for example usage.
   */
  function MdFabTriggerDirective() {
    // TODO: Remove this completely?
    return {
      restrict: 'E',

      require: ['^?mdFabSpeedDial', '^?mdFabToolbar']
    };
  }
})();


})(window, window.angular);