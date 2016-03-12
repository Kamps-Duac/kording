'use strict';

describe('Service: scaler', function() {

    // load the service's module
    beforeEach(module('kordingApp'));

    // instantiate service
    var scaler;
    beforeEach(inject(function(_scaler_) {
        scaler = _scaler_;
    }));

    it('should do something', function() {
        expect(!!scaler).toBe(true);
    });

    it('should set the current tonic', function() {
        scaler.setTonic('D');
        expect(scaler.getTonic()).toBe('D');
    });

    it('should set the current accidental', function() {
        scaler.setAccidental({ 'name': 'sharp', 'value': '#' });
        expect(scaler.getAccidental().value === '#');
    });

    it('should set the current Scale Type', function() {
      scaler.setScaleType('chromatic');
      expect(scaler.getScaleType() === 'chromatic');
    });
});
