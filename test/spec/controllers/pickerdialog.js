'use strict';

describe('Controller: PickerdialogCtrl', function () {

  // load the controller's module
  beforeEach(module('kordingApp'));

  var PickerdialogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PickerdialogCtrl = $controller('PickerdialogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
    expect(PickerdialogCtrl.awesomeThings.length).toBe(3);
  });
});
