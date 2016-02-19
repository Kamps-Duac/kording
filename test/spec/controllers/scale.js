'use strict';

describe('Controller: ScaleCtrl', function () {

  // load the controller's module
  beforeEach(module('kordingApp'));

  var ScaleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScaleCtrl = $controller('ScaleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScaleCtrl.awesomeThings.length).toBe(3);
  });
});
