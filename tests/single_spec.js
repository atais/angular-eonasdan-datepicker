var moment = require('moment');

describe('single datetimepicker test page', function () {

    var startTime = moment('2015-11-20T22:10Z');
    var dtFormat = 'YYYY/MM/DD HH:mm';

    var testFields = function (properTime) {
        element.all(by.tagName('input')).each(function (item) {
            expect(item.getAttribute('value')).toBe(properTime.format(dtFormat));
        });

        var output = element(by.binding('vm.date'));
        expect(output.getText()).toBe('Input date: ' + properTime.format(dtFormat));
    };

    beforeEach(function () {
        browser.get('http://localhost:8000/examples/single.html');
        browser.waitForAngular();
    });

    it('should present current time', function () {
        testFields(startTime.clone());
    });

    it('should add one hour and present time', function () {
        element(by.buttonText('Add +1h')).click();
        testFields(startTime.clone().add(1, 'h'));
    });

    it('should add one day and present time', function () {
        element(by.buttonText('Add +1d')).click();
        testFields(startTime.clone().add(1, 'd'));
    });

    it('should add one week and present time', function () {
        element(by.buttonText('Add +1w')).click();
        testFields(startTime.clone().add(1, 'w'));
    });

    it('clear the time', function () {
        element(by.buttonText('Clear the time')).click();
        element.all(by.tagName('input')).each(function (item) {
            expect(item.getAttribute('value')).toBe('');
        });

        var output = element(by.binding('vm.date'));
        expect(output.getText()).toBe('Input date:');
    });

    it('clear and restore the time - input', function () {
        element(by.buttonText('Clear the time')).click();
        // restore
        var opener = 'input-group-addon';
        element.all(by.className(opener)).get(0).click();
        testFields(moment());
    });

    it('clear and restore the time - input group', function () {
        element(by.buttonText('Clear the time')).click();
        // restore
        var opener = 'input-group-addon';
        element.all(by.className(opener)).get(1).click();
        testFields(moment());
    });

    it('should set selected date - input', function () {
        var selectedMoment = startTime.clone().date(1);
        var selectDateTag = '//td[@data-day="11/01/2015"]';

        var opener = 'input-group-addon';
        element.all(by.className(opener)).get(0).click();
        element(by.xpath(selectDateTag)).click();
        testFields(selectedMoment);
    });

    it('should set selected date - input group', function () {
        var selectedMoment = startTime.clone().date(1);
        var selectDateTag = '//td[@data-day="11/01/2015"]';

        var opener = 'input-group-addon';
        element.all(by.className(opener)).get(1).click();
        element(by.xpath(selectDateTag)).click();
        testFields(selectedMoment);
    });


});
