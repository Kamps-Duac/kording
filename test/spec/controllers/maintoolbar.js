'use strict';

describe('Controller: MaintoolbarCtrl', function () {

  // load the controller's module
  beforeEach(module('kordingApp'));

  var MaintoolbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaintoolbarCtrl = $controller('MaintoolbarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
    expect(MaintoolbarCtrl.awesomeThings.length).toBe(3);
  });
});
