angular.module('directory.services', ['ngResource'])

    .factory('Employees', function ($resource) {
        return $resource('https://limitless-shelf-3298.herokuapp.com/employees/:employeeId/:data');
    });