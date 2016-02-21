'use strict';

describe('Directive: korScale', function () {

  // load the directive's module
  beforeEach(module('kordingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<kor-scale></kor-scale>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the korScale directive');
  }));
});
