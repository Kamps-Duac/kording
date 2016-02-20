'use strict';

describe('Service: vexScale', function () {

  // load the service's module
  beforeEach(module('kordingApp'));

  // instantiate service
  var vexScale;
  beforeEach(inject(function (_vexScale_) {
    vexScale = _vexScale_;
  }));

  it('should do something', function () {
    expect(!!vexScale).toBe(true);
  });

});
