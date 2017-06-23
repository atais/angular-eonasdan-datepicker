# angular-eonasdan-datetimepicker [![Build Status](https://travis-ci.org/atais/angular-eonasdan-datetimepicker.svg?branch=master)](https://travis-ci.org/atais/angular-eonasdan-datetimepicker) [![npm version](https://badge.fury.io/js/angular-eonasdan-datetimepicker.svg)](https://badge.fury.io/js/angular-eonasdan-datetimepicker)

* **Angular 2 version!** [ng2-eonasdan-datetimepicker](https://github.com/atais/ng2-eonasdan-datetimepicker)
* A wrapper directive around the [bootstrap-datetimepicker component](http://eonasdan.github.io/bootstrap-datetimepicker/).
* It is a continuation of [angular-bootstrap-datetimepicker-directive](https://github.com/diosney/angular-bootstrap-datetimepicker-directive).

Having problems using the wrapper? <br>
Please, post an issue on GitHub and **provide a plunker** with your question.

## Installation

1) Install the directive via bower or npm (or download it manually, as you prefer)
```javascript
npm install angular-eonasdan-datetimepicker --save
```
```javascript
bower install angular-eonasdan-datetimepicker --save
```

2) Inject the `datetimepicker` directive in you angular app:
```javascript
angular.module('myApp', ['ae-datetimepicker']);
```

3) Start using!

## Examples

* Simple example, with one datetimepicker: http://plnkr.co/n8L8UZ
* Example with two, linked datetimepickers: http://plnkr.co/ZSjN8f
* Validation example: http://plnkr.co/NmFt43
* From/To validation example: http://plnkr.co/ZeKX7z

## Directive usage

Simply add `datetimepicker` tag and add the `ng-model` (required) attribute. Currently the `datetimepicker` tag can be added on either `input-group` or the `input` element.

Option #1
```html
<div class="input-group" datetimepicker ng-model="vm.date">
    <input class="form-control"/>
    <span class="input-group-addon">
        <span class="glyphicon glyphicon-calendar"></span>
    </span>
</div>
```

Option #2
```html
<div class="input-group">
    <input class="form-control" datetimepicker ng-model="vm.date"/>
    <span class="input-group-addon">
        <span class="glyphicon glyphicon-calendar"></span>
    </span>
</div>
```

In both cases the directive will work exactly the same. Also triggering the callendar with the icon in `span` will work in both cases. **However** if you wish to use a custom validation directive, you probably would want to add the directive in `input` element. See the: [From/To validation example](http://plnkr.co/ZeKX7z)  


## Parameters

### ng-model

If `ng-model` is `null` or `undefined`, the initial value will not be set!

### options

With `options` attribute you can pass an object containing all the required configuration for your datetimepicker.
All the options available in the original library are supported. Check the list of options on official website: http://eonasdan.github.io/bootstrap-datetimepicker/Options/

```html
<div class="input-group" datetimepicker ng-model="vm.date" options="vm.options">
```

```javascript
vm.options = {
    format: "DD.MM.YYYY",
    maxDate: dateTo
};
```

### on-change

You can pass a function that will be called every time the value of datetimepicker is changed. <br>
See: [Example with two, linked datetimepickers](http://plnkr.co/ZSjN8f)

Detailed description of event: http://eonasdan.github.io/bootstrap-datetimepicker/Events/#dpchange

### on-click

You can pass a function that will be called every time the datetimepicker is clicked. <br>
The event occurs when you open or close the datetimepicker.

### on-error

Function to be called when dp.error for the datepicker would occur

Detailed description of event: http://eonasdan.github.io/bootstrap-datetimepicker/Events/#dperror

### on-show

Function to be called when dp.show for the datepicker would occur

Detailed description of event: http://eonasdan.github.io/bootstrap-datetimepicker/Events/#dpshow

### on-hide

Function to be called when dp.hide for the datepicker would occur

Detailed description of event: http://eonasdan.github.io/bootstrap-datetimepicker/Events/#dphide

### on-update

Function to be called when dp.update for the datepicker would occur

Detailed description of event: http://eonasdan.github.io/bootstrap-datetimepicker/Events/#dpupdate

## Special thanks

* [Rodrigo Saling](https://github.com/rodrigosaling) for help on making custom validators work

## [License](https://github.com/atais/angular-eonasdan-datetimepicker/blob/master/LICENSE)
