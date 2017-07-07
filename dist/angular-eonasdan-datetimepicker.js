(function () {
    'use strict';

    var module = angular.module('ae-datetimepicker', []);

    module.directive('datetimepicker', [
        '$timeout',
        function ($timeout) {
            return {
                restrict: 'EA',
                require: 'ngModel',
                scope: {
                    options: '=?',
                    onChange: '&?',
                    onClick: '&?',
                    onHide: '&?',
                    onShow: '&?',
                    onError: '&?',
                    onUpdate: '&?'
                },
                link: function ($scope, $element, $attrs, ngModel) {
                    var dpElement = $element.parent().hasClass('input-group') ? $element.parent() : $element;

                    $scope.$watch('options', function (newValue) {
                        var dtp = dpElement.data('DateTimePicker');
                        $.map(newValue, function (value, key) {
                            dtp[key](value);
                        });
                    }, true);

                    ngModel.$render = function () {
                        // if value is undefined/null do not do anything, unless some date was set before
                        var currentDate = dpElement.data('DateTimePicker').date();
                        if (!ngModel.$viewValue && currentDate) {
                            dpElement.data('DateTimePicker').clear();
                        } else if (ngModel.$viewValue) {
                            // otherwise make sure it is moment object
                            if (!moment.isMoment(ngModel.$viewValue)) {
                                ngModel.$setViewValue(moment(ngModel.$viewValue));
                            }
                            dpElement.data('DateTimePicker').date(ngModel.$viewValue);
                        }
                    };

                    var isDateEqual = function (d1, d2) {
                      if(moment.isMoment(d1) && moment.isMoment(d2)){
                        if(d1.isValid() && d2.isValid()){
                          return (d1.valueOf() === d2.valueOf());
                        }
                      } else if ((!d1 && d2 && (d1 === d1)) || (d1 && !d2 && (d2 === d2))){
                        return false; // the d1 === d1 is to avoid NaN which is passed in iniitilization
                      }
                      return true; // return true for invald scenarios to prevent possible infinite digest loop
                    };

                    dpElement.on('dp.change', function (e) {
                        if (!isDateEqual(e.date, ngModel.$viewValue)) {
                            var newValue = e.date === false ? null : e.date;
                            ngModel.$setViewValue(newValue);
                            $timeout(function () {
                                if (typeof $scope.onChange === 'function') {
                                      $scope.onChange();
                                }
                            });
                        }
                    });

                    dpElement.on('dp.hide', function () {
                        $timeout(function () {
                            if (typeof $scope.onHide === 'function') {
                                $scope.onHide();
                              }
                        });
                    });


                    dpElement.on('dp.show', function () {
                        $timeout(function () {
                            if (typeof $scope.onShow === 'function') {
                                $scope.onShow();
                              }
                        });
                    });

                    dpElement.on('dp.error', function () {
                        $timeout(function () {
                            if (typeof $scope.onError === 'function') {
                                $scope.onError();
                              }
                        });
                    });

                    dpElement.on('dp.update', function () {
                        $timeout(function () {
                            if (typeof $scope.onUpdate === 'function') {
                                $scope.onUpdate();
                              }
                        });
                    });

                    dpElement.on('click', function () {
                        $timeout(function () {
                            if (typeof $scope.onClick === 'function') {
                                $scope.onClick();
                            }
                        });
                    });

                    dpElement.datetimepicker($scope.options);
                }
            };
        }
    ]);
})();
