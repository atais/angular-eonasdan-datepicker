(function () {
    'use strict';

    angular.module('plunker', ['ae-datetimepicker'])
        .controller('controller', ['$timeout', function ($timeout) {
            var vm = this;

            $timeout(function() { // simulating a REST API Call that takes 500 ms
                vm.date = moment().format('YYYY-MM-DD HH:mm');
            }, 500);

            vm.options = {format: 'YYYY-MM-DD HH:mm', showClear: true};

            vm.onChange = function() {
              console.log("onChange");
            };

            vm.onHide = function () {
              console.log("onHide");
            };

            vm.onShow = function () {
              console.log("onShow");
            };

            vm.onError = function(){
                console.log("onError");
            };

            vm.onUpdate = function () {
              console.log("onUpdate");
            };

            vm.getTime = function () {
                alert('Selected time is:' + vm.date.format('YYYY-MM-DD HH:mm'));
            };

            vm.addTime = function (val, selector) {
                vm.date = moment(vm.date.add(val, selector));
            };

            vm.clearTime = function () {
                vm.date = undefined;
            };
        }]);
})();
