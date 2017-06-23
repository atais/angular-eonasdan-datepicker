(function () {
    'use strict';

    angular.module('plunker', ['ae-datetimepicker'])
        .controller('controller', ['$timeout', function ($timeout) {
            var vm = this;
            vm.dateFormat = 'YYYY-MM-DD';
            vm.dateFrom = moment();
            vm.dateTo = moment().add(2,'days');

            vm.optionsFrom = {
                format:  vm.dateFormat,
                maxDate: vm.dateTo.format(vm.dateFormat)
            };

            vm.optionsTo = {
                format:  vm.dateFormat,
                minDate: vm.dateFrom.format(vm.dateFormat)
            };

            vm.onChangeDatePickerFrom = function() {
              vm.optionsTo.minDate = vm.dateFrom;
              console.log("onChange From");
            };

            vm.onChangeDatePickerTo = function() {
              vm.optionsFrom.maxDate =vm.dateTo;
              console.log("onChange to");
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

            vm.print = function () {
                console.log('vm.dateTo: ' + vm.dateTo.format('YYYY/MM/DD'));
                console.log('vm.optionsTo: ' + angular.toJson(vm.optionsTo));
                console.log('vm.dateFrom: ' + vm.dateFrom.format('YYYY/MM/DD'));
                console.log('vm.optionsFrom: ' + angular.toJson(vm.optionsFrom));
            };

        }]);
})();
