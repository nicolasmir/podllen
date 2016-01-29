/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.0.3-master-3d6077b
 */
goog.provide('ng.material.libs.showHide');
goog.require('ng.material.core');
/**
 * @ngdoc module
 * @name material.libs.showHide
 */

// Add additional handlers to ng-show and ng-hide that notify directives
// contained within that they should recompute their size.
// These run in addition to Angular's built-in ng-hide and ng-show directives.
angular.module('material.libs.showHide', [
  'material.core'
])
  .directive('ngShow', createDirective('ngShow', true))
  .directive('ngHide', createDirective('ngHide', false));


function createDirective(name, targetValue) {
  return ['$mdUtil', function($mdUtil) {
    return {
      restrict: 'A',
      multiElement: true,
      link: function($scope, $element, $attr) {
        var unregister = $scope.$on('$md-resize-enable', function() {
          unregister();

          $scope.$watch($attr[name], function(value) {
            if (!!value === targetValue) {
              $mdUtil.nextTick(function() {
                $scope.$broadcast('$md-resize');
              });
              $mdUtil.dom.animator.waitTransitionEnd($element).then(function() {
                $scope.$broadcast('$md-resize');
              });
            }
          });
        });
      }
    };
  }];
}
ng.material.libs.showHide = angular.module("material.libs.showHide");