'use strict';

describe('The scale object in canvas element reference', function () {

  // load the service's module
  beforeEach(module('kordingApp'));

  // instantiate service
  var vexScale;
  beforeEach(inject(function (_vexScale_) {
    vexScale = _vexScale_;
  }));

  // Should parameterize the test, with a list of scale combinations

  it('should do something', function () {
    expect(!!vexScale).toBe(true);
  });

  // this is tough to test becuase we construct the scale object in the generator method.
  // how can we pull out Scale construction so it is more testable??
  xit('should render a scale with no VexFlow Exception', function() {
    expect(vexScale('C', '', 'major')).toBe(true);
  });

});
