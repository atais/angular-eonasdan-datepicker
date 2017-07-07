var moment = require('moment');

describe('double datetimepicker test page', function () {

    var opener = 'glyphicon-calendar';

    var date18 = moment.utc('2015-11-18T00:00Z'); // 2015-11-18
    var date20 = moment.utc('2015-11-20T00:00Z'); // 2015-11-20

    var date17 = date18.clone().subtract(1, 'd'); // 2015-11-17
    var date19 = date18.clone().add(1, 'd'); // 2015-11-19
    var date21 = date20.clone().add(1, 'd'); // 2015-11-21

    var dateTag = function (time) {
        var selectDateTag = '//td[@data-day="' + time.format('MM/DD/YYYY') + '"]';
        return element(by.xpath(selectDateTag))
    };

    beforeAll(function () {
        browser.get('http://localhost:8000/examples/double.html');
        browser.waitForAngular();
    });

    it('should have disabled dates from outside the range', function () {
        // pickerFrom should be able to select dates before From but not after To
        element.all(by.className(opener)).get(0).click();
        expect(dateTag(date17).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date18).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date19).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date20).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date21).getAttribute('class')).toContain('disabled');
        element.all(by.className(opener)).get(0).click();

        // pickerTo should be able to select dates after To but not before From
        element.all(by.className(opener)).get(1).click();
        expect(dateTag(date17).getAttribute('class')).toContain('disabled');
        expect(dateTag(date18).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date19).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date20).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date21).getAttribute('class')).not.toContain('disabled');
        element.all(by.className(opener)).get(1).click();
    });

    it('should change when new date is selected', function () {
        element.all(by.className(opener)).get(0).click();
        dateTag(date19).click();

        element.all(by.className(opener)).get(1).click();
        dateTag(date19).click();

        // pickerFrom should be able to select dates before From but not after To
        element.all(by.className(opener)).get(0).click();
        expect(dateTag(date17).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date18).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date19).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date20).getAttribute('class')).toContain('disabled');
        expect(dateTag(date21).getAttribute('class')).toContain('disabled');
        element.all(by.className(opener)).get(0).click();

        // pickerTo should be able to select dates after To but not before From
        element.all(by.className(opener)).get(1).click();
        expect(dateTag(date17).getAttribute('class')).toContain('disabled');
        expect(dateTag(date18).getAttribute('class')).toContain('disabled');
        expect(dateTag(date19).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date20).getAttribute('class')).not.toContain('disabled');
        expect(dateTag(date21).getAttribute('class')).not.toContain('disabled');
        element.all(by.className(opener)).get(1).click();
    });


});
